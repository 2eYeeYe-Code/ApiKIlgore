import React, { useState } from 'react';


function LikeButton({ initialLikes = 12 }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);

  const handleToggleLike = () => {
    setIsLiked((prev) => !prev);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={handleToggleLike}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: isLiked ? '#e63946' : '#4a5568',
        backgroundColor: isLiked ? '#ffe5e5' : '#f7fafc',
        border: '1px solid',
        borderColor: isLiked ? '#e63946' : '#cbd5e0',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out'
      }}
    >
      {isLiked ? <FaHeart size={20} color="#e63946" /> : <FaRegHeart size={20} />}
      {isLiked ? 'Liked' : 'Like'} ({likesCount})
    </button>
  );
}

export default LikeButton;