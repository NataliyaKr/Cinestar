import { useEffect, useState } from "react";

const useFetchFAQ = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get all questions
  const fetchQuestions = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3042/faqs");
      const data = await response.json();
      console.log(data.data);
      setQuestions(data.data);
      return data.data;
    } catch (error) {
      setError("Something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create question
  const createQuestion = async (questionData) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3042/faq", {
        method: "POST",
        body: questionData,
      });

      if (!response.ok) {
        throw new Error("Error creating question");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch
  const questionRefetch = () => {
    return fetchQuestions();
  };

  // Update question
  const updateQuestion = async (questionData) => {
    try {
      const response = await fetch(`http://localhost:3042/faq`, {
        method: "PUT",
        body: questionData,
      });

      if (!response.ok) {
        console.log("Error updating question");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Delete question
  const deleteQuestion = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/faq/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get question by ID
  const fetchQuestionById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/faq/${id}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return {
    questions,
    isLoading,
    error,
    fetchQuestions,
    createQuestion,
    questionRefetch,
    updateQuestion,
    deleteQuestion,
    fetchQuestionById,
  };
};

export default useFetchFAQ;
