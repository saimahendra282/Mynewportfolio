import React, { useEffect, useState } from 'react';
import { supabase } from './supersuper.js';

const setCookie = (name, value, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='))
    ?.split('=')[1];
};

const ViewerBadge = () => {
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

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

        setViewCount(currentViews);
        setLikeCount(currentLikes);

        // Only increment view if not already viewed
        if (!getCookie('profile_viewed')) {
          const newViewCount = currentViews + 1;
          const { error: updateError } = await supabase
            .from('profile_views')
            .update({ count: newViewCount, updated_at: new Date() })
            .eq('id', 1);

          if (updateError) throw updateError;

          setViewCount(newViewCount);
          setCookie('profile_viewed', 'true');
        }
      } catch (error) {
        console.error('Error fetching/updating counts:', error.message);
      }
    };

    updateCounts();
  }, []);

  const handleLike = async () => {
    if (getCookie('profile_liked')) return;

    try {
      setIsLiked(true);
      const newLikeCount = likeCount + 1;

      const { error } = await supabase
        .from('profile_views')
        .update({ likes: newLikeCount, updated_at: new Date() })
        .eq('id', 1);

      if (error) throw error;

      setLikeCount(newLikeCount);
      setCookie('profile_liked', 'true');

      setTimeout(() => setIsLiked(false), 300);
    } catch (error) {
      console.error('Error updating likes:', error.message);
    }
  };

  return (
  <span style={{ fontSize: '22px' }}>
  <span role="img" aria-label="views">
    👁
  </span>{" "}
  {viewCount}{" "}
  
  <button
    onClick={handleLike}
    style={{
      border: "none",
      background: "none",
      cursor: getCookie("profile_liked") ? "not-allowed" : "pointer",
      transition: "transform 0.3s ease",
      transform: isLiked ? "scale(1.2)" : "scale(1)",
      display: "inline",
      padding: 0,
      fontSize: "22px",
      opacity: getCookie("profile_liked") ? 0.6 : 1
    }}
    disabled={!!getCookie("profile_liked")}
    title={getCookie("profile_liked") ? "You already liked this" : "Like"}
  >
    <span role="img" aria-label="like">
      ❤️
    </span>
  </button>
  
  {likeCount}
</span>

  );
};

export default ViewerBadge;
