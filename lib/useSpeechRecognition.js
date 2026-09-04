"use client";

import { useEffect, useRef, useState } from "react";

export function useSpeechRecognition({ onFinalResult }) {
  const [listening, setListening] = useState(false);
  const [interimText, setInterimText] = useState("");
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);
  const onFinalResultRef = useRef(onFinalResult);
  onFinalResultRef.current = onFinalResult;

  const SpeechRecognitionCtor =
    typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
  const supported = !!SpeechRecognitionCtor;

  useEffect(() => {
    if (!SpeechRecognitionCtor) return;

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let finalTranscript = "";
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interim += transcript;
        }
      }
      if (finalTranscript) {
        setInterimText("");
        onFinalResultRef.current?.(finalTranscript.trim());
      } else {
        setInterimText(interim);
      }
    };

    recognition.onerror = (event) => {
      setError(event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      recognition.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SpeechRecognitionCtor]);

  function start() {
    if (!recognitionRef.current || listening) return;
    setError(null);
    setInterimText("");
    try {
      recognitionRef.current.start();
      setListening(true);
    } catch {
      // start() throws if already started - ignore, state stays consistent
    }
  }

  function stop() {
    recognitionRef.current?.stop();
  }

  return { supported, listening, interimText, start, stop, error };
}
