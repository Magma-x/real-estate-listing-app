import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import "./singlePage.scss";

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved || false);
  const [isSaving, setIsSaving] = useState(false); // For loading state
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setIsSaving(true); // Disable button during API call
    try {
      const res = await apiRequest.post("/users/save", { postId: post.id });
      console.log("Save API response:", res.data); // Debug log
      const newSavedState = res.data.isSaved; // Get new saved state
      setSaved(newSavedState); // Update saved state
      alert("Post Saved!"); // Show correct alert
    } catch (err) {
      console.error("Error saving post:", err);
      alert("Failed to save post. Please try again.");
    } finally {
      setIsSaving(false); // Re-enable button
    }
  };

  const handleChat = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    if (!post.user?.id) {
      alert("User information for this post is unavailable.");
      return;
    }
    if (currentUser.id === post.user.id) {
      alert("You cannot start a chat with yourself!");
      return;
    }
    try {
      const res = await apiRequest.get(`/chats/find/${currentUser.id}/${post.user.id}`);
      let chatId = res.data?.id;
      if (!chatId) {
        const newChat = await apiRequest.post("/chats", { receiverId: post.user.id });
        chatId = newChat.data.id;
      }
      navigate(`/profile?chat=${chatId}`);
    } catch (err) {
      console.error("Error starting chat:", err);
      let errorMessage = "Failed to start chat. Please try again.";
      if (err.response?.status === 401) {
        errorMessage = "Session expired. Please log in again.";
        navigate("/login");
      } else if (err.response?.status === 404) {
        errorMessage = "User not found. Please try again later.";
      } else if (err.response?.status === 400) {
        errorMessage = "Invalid user IDs. Please try again.";
      }
      alert(errorMessage);
    }
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user?.avatar || "/noavatar.jpg"} alt="" />
                <span>{post.user?.username || "Unknown User"}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail?.desc || ""),
              }}
            />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>{post.postDetail?.utilities === "owner" ? "Owner is responsible" : "Tenant is responsible"}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{post.postDetail?.pet === "allowed" ? "Pets Allowed" : "Pets not Allowed"}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail?.income || "N/A"}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail?.size || 0} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail?.school > 999
                    ? (post.postDetail.school / 1000).toFixed(1) + "km"
                    : (post.postDetail?.school || 0) + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail?.bus || 0}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail?.restaurant || 0}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button onClick={handleChat}>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
              disabled={isSaving}
            >
              <img src="/save.png" alt="" />
              {saved ? "Already Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;