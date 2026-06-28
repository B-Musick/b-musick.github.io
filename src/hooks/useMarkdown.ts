import { useEffect, useState } from "react";

export function useMarkdown(requestUrl, enabled = true) {
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!enabled || !requestUrl) return;

    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        setError(false);

    const response = await fetch(requestUrl);

    if (!response.ok) {
        throw new Error("Markdown file not found");
    }

    const text = await response.text();
    setPostText(text);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [requestUrl, enabled]);

  return {
    postText,
    loading,
    error,
  };
}