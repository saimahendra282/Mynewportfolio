import React, { useEffect, useState } from 'react';
import { supabase } from './supersuper.js'; // Adjust path as needed

const ViewerBadge = () => {
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // To trigger the animation

  useEffect(() => {
    const updateCounts = async () => {
      try {
        const { data, error } = await supabase
          .from('profile_views')
          .select('count, likes')
          .eq('id', 1)
          .single();

        if (error) throw error;

        const currentViews = data.count || 0;
        const currentLikes = data.likes || 0;
        const newViewCount = currentViews + 1;

        const { error: updateError } = await supabase
          .from('profile_views')
          .update({ count: newViewCount, updated_at: new Date() })
          .eq('id', 1);

        if (updateError) throw updateError;

        setViewCount(newViewCount);
        setLikeCount(currentLikes);
      } catch (error) {
        console.error('Error fetching/updating counts:', error.message);
      }
    };

    updateCounts();
  }, []);

  const handleLike = async () => {
    try {
      setIsLiked(true); // Trigger animation
      const newLikeCount = likeCount + 1;

      const { error } = await supabase
        .from('profile_views')
        .update({ likes: newLikeCount, updated_at: new Date() })
        .eq('id', 1);

      if (error) throw error;

      setLikeCount(newLikeCount);

      // Reset animation after a short delay
      setTimeout(() => setIsLiked(false), 300); // Matches transition duration
    } catch (error) {
      console.error('Error updating likes:', error.message);
    }
  };

  return (
    <span style={{ fontSize: '22px' }}>
      👁 Views: {viewCount}{' '}
      <button
        onClick={handleLike}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          transition: 'transform 0.3s ease', // Smooth transition
          transform: isLiked ? 'scale(1.2)' : 'scale(1)', // Scale up when clicked
          display: 'inline', // Keep it inline with text
          padding: 0, // No extra space
          fontSize:'22px'
        }}
      >
          🫰🏻
      </button>
      {likeCount}
    </span>
  );
};

export default ViewerBadge;