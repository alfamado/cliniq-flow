import React, { useState, useRef, useEffect } from "react";

const sentences = [
"The patient has had fever for three days.",
"The child has persistent high-grade fever.",
"There is history of chest pain for two days.",
"The patient complains of severe chest tightness.",
"There is difficulty in breathing.",
"The child is breathing rapidly.",
"The patient has a persistent cough.",
"The cough is productive with yellow sputum.",
"There is history of vomiting.",
"The child has vomited five times today.",
"The patient has diarrhea.",
"There are loose watery stools three times daily.",
"The patient complains of headache.",
"The headache is severe and persistent.",
"There is abdominal pain.",
"The child has severe stomach pain.",
"There is swelling of both legs.",
"The patient complains of leg pain.",
"The child had convulsion at home.",
"There was loss of consciousness.",
"The patient reports dizziness.",
"There is generalized body weakness.",
"The child is not feeding well.",
"There is reduced urine output.",
"The patient has blood in stool.",
"There is blood in vomitus.",
"The child has persistent crying.",
"The patient has night sweats.",
"There is significant weight loss.",
"The patient reports palpitations.",
"There is joint pain.",
"The child has neck stiffness.",
"The patient complains of back pain.",
"There is facial swelling.",
"The child has skin rashes.",
"The patient reports itching.",
"There is ear discharge.",
"The child has nasal congestion.",
"The patient has sore throat.",
"There is painful urination.",
"Temperature is thirty-nine degrees Celsius.",
"Temperature is thirty-eight point five degrees Celsius.",
"Pulse rate is one hundred and twenty beats per minute.",
"Pulse rate is eighty beats per minute.",
"Respiratory rate is forty breaths per minute.",
"Respiratory rate is twenty breaths per minute.",
"Blood pressure is ninety over sixty millimeters of mercury.",
"Blood pressure is one hundred and forty over ninety.",
"Oxygen saturation is ninety-two percent on room air.",
"Oxygen saturation is ninety-eight percent.",
"The patient is tachycardic.",
"The patient is hypotensive.",
"The child is febrile.",
"The patient is dehydrated.",
"Capillary refill time is prolonged.",
"The patient is pale.",
"There is cyanosis of the lips.",
"The child appears lethargic.",
"The patient is alert and oriented.",
"Glasgow coma scale is ten over fifteen.",
"Blood sugar is low.",
"Blood sugar is elevated.",
"The patient is in respiratory distress.",
"The child has sunken eyes.",
"There is delayed capillary refill.",
"The patient has bounding pulse.",
"The child has weak pulse.",
"The patient is afebrile.",
"There is increased work of breathing.",
"The patient has normal vital signs.",
"This is an emergency case.",
"The patient requires urgent attention.",
"The child is critically ill.",
"There is severe dehydration.",
"The patient is in shock.",
"Immediate resuscitation is required.",
"The airway is compromised.",
"There is severe respiratory distress.",
"The child is unconscious.",
"The patient is gasping.",
"There is active bleeding.",
"The patient is actively seizing.",
"There is altered level of consciousness.",
"The child is not responsive.",
"This case should be prioritized.",
"There is suspected meningitis.",
"The patient has severe malaria.",
"There is suspected sepsis.",
"The patient requires oxygen therapy.",
"Immediate intravenous access is needed.",
"The child is severely malnourished.",
"There is severe anemia.",
"The patient requires urgent referral.",
"There is suspected pneumonia.",
"The patient is severely hypertensive.",
"There is suspected appendicitis.",
"The patient has severe chest pain.",
"There is suspected stroke.",
"The child has repeated convulsions.",
"The patient is unstable.",
"Give paracetamol fifteen milligrams per kilogram.",
"Administer intravenous ceftriaxone.",
"Start amoxicillin two hundred and fifty milligrams twice daily.",
"Give oral rehydration solution after each stool.",
"Administer artesunate intravenously.",
"Start intravenous fluids immediately.",
"Give oxygen at five liters per minute.",
"Administer diazepam for convulsion.",
"Give zinc supplementation daily.",
"Start antihypertensive medication.",
"Prescribe metronidazole four hundred milligrams three times daily.",
"Give ibuprofen for pain relief.",
"Administer nebulized salbutamol.",
"Start maintenance fluids.",
"Give loading dose of phenobarbital.",
"Administer blood transfusion.",
"Start intravenous antibiotics.",
"Prescribe oral iron supplementation.",
"Administer insulin as prescribed.",
"Give oral antimalarial drugs.",
"Provide vitamin A supplementation.",
"Start oral antibiotics.",
"Administer antiemetic medication.",
"Give intravenous fluids bolus.",
"Prescribe cough syrup.",
"Start proton pump inhibitor.",
"Give oral antihistamine.",
"Administer tetanus toxoid.",
"Start analgesics for pain.",
"Provide supportive care.",
"Give calcium supplementation.",
"Administer magnesium sulfate.",
"Start corticosteroids.",
"Provide nebulization therapy.",
"Prescribe oral rehydration salts.",
"Administer intravenous paracetamol.",
"Start broad spectrum antibiotics.",
"Provide intravenous dextrose.",
"Give oral fluids.",
"Administer intramuscular injection.",
"Provide antipyretic medication.",
"Start maintenance antibiotics.",
"Prescribe antimalarial combination therapy.",
"Give oral hydration therapy.",
"Administer sedative medication.",
"Start antihistamine therapy.",
"Provide fluid resuscitation.",
"Give loading dose immediately.",
"Administer emergency medication.",
"Start appropriate treatment.",
"The patient is a five-year-old male presenting with fever and cough.",
"The child is a two-year-old female with convulsion.",
"This is a ten-year-old child with abdominal pain.",
"The patient presents with chest pain and difficulty breathing.",
"There is history of diarrhea for three days.",
"The child was well until two days ago.",
"The symptoms started suddenly.",
"The illness has been progressive.",
"There is no history of trauma.",
"The patient has no known drug allergy.",
"Immunization is up to date.",
"The child is fully immunized.",
"There is history of recent travel.",
"The patient was treated at a private clinic.",
"The child received paracetamol at home.",
"There was no improvement after medication.",
"The patient looks ill.",
"The child is irritable.",
"The patient is stable.",
"The case is routine.",
"The patient requires observation.",
"The child will be admitted.",
"The patient will be discharged.",
"Follow up in one week.",
"Return if symptoms worsen.",
"Monitor vital signs regularly.",
"Encourage oral fluid intake.",
"Maintain strict input and output chart.",
"Continue current medication.",
"Review laboratory results.",
"Request full blood count.",
"Check malaria parasite test.",
"Perform chest X-ray.",
"Conduct urinalysis.",
"Send blood for culture.",
"Monitor oxygen saturation.",
"Reassess after treatment.",
"Observe for complications.",
"Maintain airway patency.",
"Continue supportive care.",
"Document findings clearly.",
"Inform the caregiver.",
"Counsel the parents appropriately.",
"Explain the treatment plan.",
"Obtain informed consent.",
"Provide health education.",
"Ensure proper hand hygiene.",
"Follow hospital protocol.",
"Escalate care if necessary.",
"This concludes the clinical assessment."
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
    //{
      //const savedIndex = localStorage.getItem("currentIndex");
      //return savedIndex ? parseInt(savedIndex) : 0;
    //});
  const [speakerId, setSpeakerId] = useState("");
  const [audioURL, setAudioURL] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState("");

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => {
    if (!speakerId) return;

    const fetchProgress = async () => {
      try {
        const response = await fetch(
          `https://cliniq-flow-backend.onrender.com/progress/${speakerId}`
        );
        const data = await response.json();
        setCurrentIndex(data.next_sentence - 1);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();
  }, [speakerId]);

  const startRecording = async () => {
    setError("");

    if (!speakerId) {
      setError("Please enter Speaker ID first.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        setIsRecording(false);

        // Upload automatically after stopping
        //await uploadAudio(blob);
      };

      mediaRecorder.start();
      setIsRecording(true);

    } catch (err) {
      console.error(err);
      setError("Microphone permission denied or not available.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const uploadAudio = async (audioBlob) => {
    const formData = new FormData();

    formData.append("speaker_id", speakerId);
    formData.append("sentence_id", currentIndex + 1);
    formData.append("sentence_text", sentences[currentIndex]);
    formData.append("file", audioBlob, "recording.webm");

    try {
      const response = await fetch("https://cliniq-flow-backend.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload success:", data);

    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const nextSentence = () => {
    const next = currentIndex + 1;
    setAudioURL(null);
    setCurrentIndex(next);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <div style={{
        backgroundColor: "#E32227",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px",
      
      }}>
        <h4>Recording Instructions</h4>
        <ul>
          <li>1. Enter your Speaker ID before starting.</li>
          <li>2. Click "Start" and read the sentence EXACTLY as written.</li>
          <li>3. Speak clearly at normal clinical speed.</li>
          <li>4. Avoid background noise.</li>
          <li>5. Click "Stop" after finishing.</li>
          <li>6. Confirm playback, then click "Next".</li>
          <li>7. Preferably use Google Chrome on laptop</li>
          <li>8. Allow microphone access</li>
        </ul>
        <p><strong>Please do not paraphrase or modify the sentence.</strong></p>
      </div>
      <h2>CLINIQ-FLOW Voice Recorder</h2>
      

      <input
        type="text"
        placeholder="Enter Speaker ID (e.g. DOC01)"
        value={speakerId}
        onChange={(e) => setSpeakerId(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      <h3>Sentence {currentIndex + 1} / {sentences.length}</h3>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        {sentences[currentIndex]}
      </p>

      <button onClick={startRecording} disabled={isRecording}>
        Start
      </button>

      <button
        onClick={stopRecording}
        disabled={!isRecording}
        style={{ marginLeft: "10px" }}
      >
        Stop
      </button>

      {isRecording && (
        <p style={{ color: "red", marginTop: "15px" }}>
          🔴 Recording in progress...
        </p>
      )}

      {audioURL && (
        <div style={{ marginTop: "20px" }}>
          <audio controls src={audioURL}></audio>

          <div style={{ marginTop: "15px" }}>
            <button
              onClick={() => {
                setAudioURL(null);
                chunksRef.current = [];
              }}
              style={{
                backgroundColor: "#facc15",
                padding: "8px 12px",
                marginRight: "10px",
              }}
            >
              Re-record
            </button>

            <button
              onClick={async () => {
                const audioBlob = new Blob(chunksRef.current, {
                  type: "audio/webm",
                });

                await uploadAudio(
                  audioBlob,
                  currentIndex + 1,
                  sentences[currentIndex]
                );

                nextSentence();
              }}
              style={{
                backgroundColor: "#22c55e",
                color: "white",
                padding: "8px 12px",
              }}
            >
              Save & Next
            </button>
          </div>
        </div>
      )}

    </div>
  );
}