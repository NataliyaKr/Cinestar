import { useEffect, useState } from "react";

const useFetchFAQ = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3042/faqs");
      const data = await response.json();
      console.log(data.data);
      setQuestions(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { questions, isLoading, error };
};

export default useFetchFAQ;
