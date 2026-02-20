// import React, { useState, useRef, useEffect } from "react";

// const sentences = [
// "The patient has had fever for three days.",
// "The child has persistent high-grade fever.",
// "There is history of chest pain for two days.",
// "The patient complains of severe chest tightness.",
// "There is difficulty in breathing.",
// "The child is breathing rapidly.",
// "The patient has a persistent cough.",
// "The cough is productive with yellow sputum.",
// "There is history of vomiting.",
// "The child has vomited five times today.",
// "The patient has diarrhea.",
// "There are loose watery stools three times daily.",
// "The patient complains of headache.",
// "The headache is severe and persistent.",
// "There is abdominal pain.",
// "The child has severe stomach pain.",
// "There is swelling of both legs.",
// "The patient complains of leg pain.",
// "The child had convulsion at home.",
// "There was loss of consciousness.",
// "The patient reports dizziness.",
// "There is generalized body weakness.",
// "The child is not feeding well.",
// "There is reduced urine output.",
// "The patient has blood in stool.",
// "There is blood in vomitus.",
// "The child has persistent crying.",
// "The patient has night sweats.",
// "There is significant weight loss.",
// "The patient reports palpitations.",
// "There is joint pain.",
// "The child has neck stiffness.",
// "The patient complains of back pain.",
// "There is facial swelling.",
// "The child has skin rashes.",
// "The patient reports itching.",
// "There is ear discharge.",
// "The child has nasal congestion.",
// "The patient has sore throat.",
// "There is painful urination.",
// "Temperature is thirty-nine degrees Celsius.",
// "Temperature is thirty-eight point five degrees Celsius.",
// "Pulse rate is one hundred and twenty beats per minute.",
// "Pulse rate is eighty beats per minute.",
// "Respiratory rate is forty breaths per minute.",
// "Respiratory rate is twenty breaths per minute.",
// "Blood pressure is ninety over sixty millimeters of mercury.",
// "Blood pressure is one hundred and forty over ninety.",
// "Oxygen saturation is ninety-two percent on room air.",
// "Oxygen saturation is ninety-eight percent.",
// "The patient is tachycardic.",
// "The patient is hypotensive.",
// "The child is febrile.",
// "The patient is dehydrated.",
// "Capillary refill time is prolonged.",
// "The patient is pale.",
// "There is cyanosis of the lips.",
// "The child appears lethargic.",
// "The patient is alert and oriented.",
// "Glasgow coma scale is ten over fifteen.",
// "Blood sugar is low.",
// "Blood sugar is elevated.",
// "The patient is in respiratory distress.",
// "The child has sunken eyes.",
// "There is delayed capillary refill.",
// "The patient has bounding pulse.",
// "The child has weak pulse.",
// "The patient is afebrile.",
// "There is increased work of breathing.",
// "The patient has normal vital signs.",
// "This is an emergency case.",
// "The patient requires urgent attention.",
// "The child is critically ill.",
// "There is severe dehydration.",
// "The patient is in shock.",
// "Immediate resuscitation is required.",
// "The airway is compromised.",
// "There is severe respiratory distress.",
// "The child is unconscious.",
// "The patient is gasping.",
// "There is active bleeding.",
// "The patient is actively seizing.",
// "There is altered level of consciousness.",
// "The child is not responsive.",
// "This case should be prioritized.",
// "There is suspected meningitis.",
// "The patient has severe malaria.",
// "There is suspected sepsis.",
// "The patient requires oxygen therapy.",
// "Immediate intravenous access is needed.",
// "The child is severely malnourished.",
// "There is severe anemia.",
// "The patient requires urgent referral.",
// "There is suspected pneumonia.",
// "The patient is severely hypertensive.",
// "There is suspected appendicitis.",
// "The patient has severe chest pain.",
// "There is suspected stroke.",
// "The child has repeated convulsions.",
// "The patient is unstable.",
// "Give paracetamol fifteen milligrams per kilogram.",
// "Administer intravenous ceftriaxone.",
// "Start amoxicillin two hundred and fifty milligrams twice daily.",
// "Give oral rehydration solution after each stool.",
// "Administer artesunate intravenously.",
// "Start intravenous fluids immediately.",
// "Give oxygen at five liters per minute.",
// "Administer diazepam for convulsion.",
// "Give zinc supplementation daily.",
// "Start antihypertensive medication.",
// "Prescribe metronidazole four hundred milligrams three times daily.",
// "Give ibuprofen for pain relief.",
// "Administer nebulized salbutamol.",
// "Start maintenance fluids.",
// "Give loading dose of phenobarbital.",
// "Administer blood transfusion.",
// "Start intravenous antibiotics.",
// "Prescribe oral iron supplementation.",
// "Administer insulin as prescribed.",
// "Give oral antimalarial drugs.",
// "Provide vitamin A supplementation.",
// "Start oral antibiotics.",
// "Administer antiemetic medication.",
// "Give intravenous fluids bolus.",
// "Prescribe cough syrup.",
// "Start proton pump inhibitor.",
// "Give oral antihistamine.",
// "Administer tetanus toxoid.",
// "Start analgesics for pain.",
// "Provide supportive care.",
// "Give calcium supplementation.",
// "Administer magnesium sulfate.",
// "Start corticosteroids.",
// "Provide nebulization therapy.",
// "Prescribe oral rehydration salts.",
// "Administer intravenous paracetamol.",
// "Start broad spectrum antibiotics.",
// "Provide intravenous dextrose.",
// "Give oral fluids.",
// "Administer intramuscular injection.",
// "Provide antipyretic medication.",
// "Start maintenance antibiotics.",
// "Prescribe antimalarial combination therapy.",
// "Give oral hydration therapy.",
// "Administer sedative medication.",
// "Start antihistamine therapy.",
// "Provide fluid resuscitation.",
// "Give loading dose immediately.",
// "Administer emergency medication.",
// "Start appropriate treatment.",
// "The patient is a five-year-old male presenting with fever and cough.",
// "The child is a two-year-old female with convulsion.",
// "This is a ten-year-old child with abdominal pain.",
// "The patient presents with chest pain and difficulty breathing.",
// "There is history of diarrhea for three days.",
// "The child was well until two days ago.",
// "The symptoms started suddenly.",
// "The illness has been progressive.",
// "There is no history of trauma.",
// "The patient has no known drug allergy.",
// "Immunization is up to date.",
// "The child is fully immunized.",
// "There is history of recent travel.",
// "The patient was treated at a private clinic.",
// "The child received paracetamol at home.",
// "There was no improvement after medication.",
// "The patient looks ill.",
// "The child is irritable.",
// "The patient is stable.",
// "The case is routine.",
// "The patient requires observation.",
// "The child will be admitted.",
// "The patient will be discharged.",
// "Follow up in one week.",
// "Return if symptoms worsen.",
// "Monitor vital signs regularly.",
// "Encourage oral fluid intake.",
// "Maintain strict input and output chart.",
// "Continue current medication.",
// "Review laboratory results.",
// "Request full blood count.",
// "Check malaria parasite test.",
// "Perform chest X-ray.",
// "Conduct urinalysis.",
// "Send blood for culture.",
// "Monitor oxygen saturation.",
// "Reassess after treatment.",
// "Observe for complications.",
// "Maintain airway patency.",
// "Continue supportive care.",
// "Document findings clearly.",
// "Inform the caregiver.",
// "Counsel the parents appropriately.",
// "Explain the treatment plan.",
// "Obtain informed consent.",
// "Provide health education.",
// "Ensure proper hand hygiene.",
// "Follow hospital protocol.",
// "Escalate care if necessary.",
// "This concludes the clinical assessment."
// ];

// export default function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//     //{
//       //const savedIndex = localStorage.getItem("currentIndex");
//       //return savedIndex ? parseInt(savedIndex) : 0;
//     //});
//   const [speakerId, setSpeakerId] = useState("");
//   const [audioURL, setAudioURL] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const [error, setError] = useState("");

//   const mediaRecorderRef = useRef(null);
//   const chunksRef = useRef([]);

//   useEffect(() => {
//     if (!speakerId) return;

//     const fetchProgress = async () => {
//       try {
//         const response = await fetch(
//           `https://cliniq-flow-backend.onrender.com/progress/${speakerId}`
//         );
//         const data = await response.json();
//         setCurrentIndex(data.next_sentence - 1);
//       } catch (error) {
//         console.error("Error fetching progress:", error);
//       }
//     };

//     fetchProgress();
//   }, [speakerId]);

//   const startRecording = async () => {
//     setError("");

//     if (!speakerId) {
//       setError("Please enter Speaker ID first.");
//       return;
//     }

//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

//       let mimeType = "";

//       if (MediaRecorder.isTypeSupported("audio/mp4")) {
//         mimeType = "audio/mp4";
//       } else if (MediaRecorder.isTypeSupported("audio/webm")) {
//         mimeType = "audio/webm";
//       }

//       const options = mimeType ? { mimeType } : {};
//       const mediaRecorder = new MediaRecorder(stream, options);
//       mediaRecorderRef.current = mediaRecorder;

//       chunksRef.current = [];

//       mediaRecorder.ondataavailable = (event) => {
//         chunksRef.current.push(event.data);
//       };

//       mediaRecorder.onstop = async () => {
//         const blob = new Blob(chunksRef.current, {
//           type: mediaRecorder.mimeType,
//         });

//         const url = URL.createObjectURL(blob);
//         setAudioURL(url);
//         setIsRecording(false);

//         // 🔥 IMPORTANT: stop microphone stream (Safari fix)
//         mediaRecorder.stream.getTracks().forEach(track => track.stop());
//       };


//       mediaRecorder.start();
//       setIsRecording(true);

//     } catch (err) {
//       console.error(err);
//       setError("Microphone permission denied or not available.");
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//     }
//   };

//   const uploadAudio = async (audioBlob) => {
//     const formData = new FormData();

//     formData.append("speaker_id", speakerId);
//     formData.append("sentence_id", currentIndex + 1);
//     formData.append("sentence_text", sentences[currentIndex]);
//     formData.append(
//       "file",
//       audioBlob,
//       audioBlob.type.includes("mp4") ? "recording.mp4" : "recording.webm"
//     );


//     try {
//       const response = await fetch("https://cliniq-flow-backend.onrender.com/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       console.log("Upload success:", data);

//     } catch (error) {
//       console.error("Upload error:", error);
//     }
//   };

//   const nextSentence = () => {
//     const next = currentIndex + 1;
//     setAudioURL(null);
//     setCurrentIndex(next);
//   };

//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial" }}>
//       <div style={{
//         backgroundColor: "#E32227",
//         padding: "15px",
//         borderRadius: "8px",
//         marginBottom: "20px",
      
//       }}>
//         <h4>Recording Instructions</h4>
//         <ul>
//           <li>1. Enter your Speaker ID before starting.</li>
//           <li>2. Click "Start" and read the sentence EXACTLY as written.</li>
//           <li>3. Speak clearly at normal clinical speed.</li>
//           <li>4. Avoid background noise.</li>
//           <li>5. Click "Stop" after finishing.</li>
//           <li>6. Confirm playback, then click "Next".</li>
//           <li>7. Preferably use Google Chrome on laptop</li>
//           <li>8. Allow microphone access</li>
//           <li>9. If you pick an ID and the sentence doesn't start from 1, Please pick another number</li>
//           <li>10. Please open the link directly in Safari, not inside WhatsApp or Mail</li>
//         </ul>
//         <p><strong>Please do not paraphrase or modify the sentence.</strong></p>
//       </div>
//       <h2>CLINIQ-FLOW Voice Recorder</h2>
      

//       <input
//         type="text"
//         placeholder="Enter Speaker ID (e.g. DOC01)"
//         value={speakerId}
//         onChange={(e) => setSpeakerId(e.target.value)}
//         style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
//       />

//       {error && (
//         <p style={{ color: "red" }}>{error}</p>
//       )}

//       <h3>Sentence {currentIndex + 1} / {sentences.length}</h3>
//       <p style={{ fontSize: "18px", marginBottom: "20px" }}>
//         {sentences[currentIndex]}
//       </p>

//       <button onClick={startRecording} disabled={isRecording}>
//         Start
//       </button>

//       <button
//         onClick={stopRecording}
//         disabled={!isRecording}
//         style={{ marginLeft: "10px" }}
//       >
//         Stop
//       </button>

//       {isRecording && (
//         <p style={{ color: "red", marginTop: "15px" }}>
//           🔴 Recording in progress...
//         </p>
//       )}

//       {audioURL && (
//         <div style={{ marginTop: "20px" }}>
//           <audio controls src={audioURL} key={audioURL}></audio>

//           <div style={{ marginTop: "15px" }}>
//             <button
//               onClick={() => {
//                 if (audioURL) {
//                   URL.revokeObjectURL(audioURL);
//                 }
//                 setAudioURL(null);
//                 chunksRef.current = [];

//               }}
//               style={{
//                 backgroundColor: "#facc15",
//                 padding: "8px 12px",
//                 marginRight: "10px",
//               }}
//             >
//               Re-record
//             </button>

//             <button
//               onClick={async () => {
//                 const audioBlob = new Blob(chunksRef.current, {
//                   type: mediaRecorderRef.current.mimeType,
//                 });


//                 await uploadAudio(
//                   audioBlob,
//                   currentIndex + 1,
//                   sentences[currentIndex]
//                 );

//                 nextSentence();
//               }}
//               style={{
//                 backgroundColor: "#22c55e",
//                 color: "white",
//                 padding: "8px 12px",
//               }}
//             >
//               Save & Next
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";

// const sentences = {
//   english: {
//     doctor: [
//       // 🔵 PASTE 200 ENGLISH DOCTOR SENTENCES HERE
//     ],
//     patient: [
//       // 🔵 PASTE 400 ENGLISH PATIENT PROMPTS HERE
//     ]
//   },
//   yoruba: {
//     doctor: [
//       // 🔵 PASTE YORUBA DOCTOR TRANSLATIONS HERE
//     ],
//     patient: [
//       // 🔵 PASTE YORUBA PATIENT PROMPTS HERE
//     ]
//   },
//   pidgin: {
//     doctor: [
//       // 🔵 PASTE PIDGIN DOCTOR TRANSLATIONS HERE
//     ],
//     patient: [
//       // 🔵 PASTE PIDGIN PATIENT PROMPTS HERE
//     ]
//   }
// };

// export default function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [speakerId, setSpeakerId] = useState("");
//   const [language, setLanguage] = useState("english");
//   const [role, setRole] = useState("doctor");
//   const [audioURL, setAudioURL] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const [error, setError] = useState("");

//   const mediaRecorderRef = useRef(null);
//   const chunksRef = useRef([]);

//   const currentSentences =
//     sentences[language] && sentences[language][role]
//       ? sentences[language][role]
//       : [];

//   useEffect(() => {
//     if (!speakerId) return;

//     const fetchProgress = async () => {
//       try {
//         const response = await fetch(
//           `https://cliniq-flow-backend.onrender.com/progress/${speakerId}?language=${language}&role=${role}`
//         );
//         const data = await response.json();
//         setCurrentIndex(data.next_sentence - 1 || 0);
//       } catch (error) {
//         console.error("Error fetching progress:", error);
//       }
//     };

//     fetchProgress();
//   }, [speakerId, language, role]);

//   const startRecording = async () => {
//     setError("");

//     if (!speakerId) {
//       setError("Please enter Speaker ID first.");
//       return;
//     }

//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

//       let mimeType = "";
//       if (MediaRecorder.isTypeSupported("audio/mp4")) {
//         mimeType = "audio/mp4";
//       } else if (MediaRecorder.isTypeSupported("audio/webm")) {
//         mimeType = "audio/webm";
//       }

//       const options = mimeType ? { mimeType } : {};
//       const mediaRecorder = new MediaRecorder(stream, options);
//       mediaRecorderRef.current = mediaRecorder;

//       chunksRef.current = [];

//       mediaRecorder.ondataavailable = (event) => {
//         chunksRef.current.push(event.data);
//       };

//       mediaRecorder.onstop = async () => {
//         const blob = new Blob(chunksRef.current, {
//           type: mediaRecorder.mimeType
//         });

//         const url = URL.createObjectURL(blob);
//         setAudioURL(url);
//         setIsRecording(false);

//         // Stop microphone properly (Safari fix)
//         mediaRecorder.stream.getTracks().forEach((track) => track.stop());
//       };

//       mediaRecorder.start();
//       setIsRecording(true);
//     } catch (err) {
//       console.error(err);
//       setError("Microphone permission denied or not available.");
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//     }
//   };

//   const uploadAudio = async (audioBlob) => {
//     const formData = new FormData();

//     formData.append("speaker_id", speakerId);
//     formData.append("sentence_id", currentIndex + 1);
//     formData.append("sentence_text", currentSentences[currentIndex]);
//     formData.append("language", language);
//     formData.append("role", role);
//     formData.append(
//       "file",
//       audioBlob,
//       audioBlob.type.includes("mp4")
//         ? "recording.mp4"
//         : "recording.webm"
//     );

//     try {
//       const response = await fetch(
//         "https://cliniq-flow-backend.onrender.com/upload",
//         {
//           method: "POST",
//           body: formData
//         }
//       );

//       const data = await response.json();
//       console.log("Upload success:", data);
//     } catch (error) {
//       console.error("Upload error:", error);
//     }
//   };

//   const nextSentence = () => {
//     const next = currentIndex + 1;
//     setAudioURL(null);
//     setCurrentIndex(next);
//   };

//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial" }}>
//       <div
//         style={{
//           backgroundColor: "#E32227",
//           padding: "15px",
//           borderRadius: "8px",
//           marginBottom: "20px",
//           color: "white"
//         }}
//       >
//         <h4>Recording Instructions</h4>
//         <ul>
//           <li>1. Enter your Speaker ID.</li>
//           <li>2. Select language and role.</li>
//           <li>3. Click Start and read EXACTLY as written.</li>
//           <li>4. Speak clearly at normal clinical speed.</li>
//           <li>5. Avoid background noise.</li>
//           <li>6. Stop → Confirm playback → Save & Next.</li>
//           <li>7. Use Chrome or Safari directly (not inside WhatsApp).</li>
//         </ul>
//         <p><strong>Do not paraphrase.</strong></p>
//       </div>

//       <h2>CLINIQ-FLOW Voice Recorder</h2>

//       <input
//         type="text"
//         placeholder="Enter Speaker ID (e.g. DOC01)"
//         value={speakerId}
//         onChange={(e) => setSpeakerId(e.target.value)}
//         style={{ padding: "8px", marginBottom: "15px", width: "300px" }}
//       />

//       <div style={{ marginBottom: "15px" }}>
//         <select
//           value={language}
//           onChange={(e) => {
//             setLanguage(e.target.value);
//             setCurrentIndex(0);
//           }}
//         >
//           <option value="english">English</option>
//           <option value="yoruba">Yoruba</option>
//           <option value="pidgin">Pidgin</option>
//         </select>

//         <select
//           value={role}
//           onChange={(e) => {
//             setRole(e.target.value);
//             setCurrentIndex(0);
//           }}
//           style={{ marginLeft: "10px" }}
//         >
//           <option value="doctor">Doctor</option>
//           <option value="patient">Patient</option>
//         </select>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {currentSentences.length > 0 ? (
//         <>
//           <h3>
//             Sentence {currentIndex + 1} / {currentSentences.length}
//           </h3>
//           <p style={{ fontSize: "18px", marginBottom: "20px" }}>
//             {currentSentences[currentIndex]}
//           </p>
//         </>
//       ) : (
//         <p>No sentences added yet for this selection.</p>
//       )}

//       <button onClick={startRecording} disabled={isRecording}>
//         Start
//       </button>

//       <button
//         onClick={stopRecording}
//         disabled={!isRecording}
//         style={{ marginLeft: "10px" }}
//       >
//         Stop
//       </button>

//       {isRecording && (
//         <p style={{ color: "red", marginTop: "15px" }}>
//           🔴 Recording in progress...
//         </p>
//       )}

//       {audioURL && (
//         <div style={{ marginTop: "20px" }}>
//           <audio controls src={audioURL} key={audioURL}></audio>

//           <div style={{ marginTop: "15px" }}>
//             <button
//               onClick={() => {
//                 if (audioURL) {
//                   URL.revokeObjectURL(audioURL);
//                 }
//                 setAudioURL(null);
//                 chunksRef.current = [];
//               }}
//               style={{
//                 backgroundColor: "#facc15",
//                 padding: "8px 12px",
//                 marginRight: "10px"
//               }}
//             >
//               Re-record
//             </button>

//             <button
//               onClick={async () => {
//                 const audioBlob = new Blob(chunksRef.current, {
//                   type: mediaRecorderRef.current.mimeType
//                 });

//                 await uploadAudio(audioBlob);
//                 nextSentence();
//               }}
//               style={{
//                 backgroundColor: "#22c55e",
//                 color: "white",
//                 padding: "8px 12px"
//               }}
//             >
//               Save & Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";

  /* =========================
     SENTENCE STRUCTURE
     ========================= */

  const sentences = {
    english: {
      doctor: [
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
      ],
      patient: [
        "When did the fever start?",
        "Is the fever constant or does it come and go?",
        "Have you checked your temperature?",
        "What was the highest temperature recorded?",
        "Do you have chills?",
        "Are you sweating excessively?",
        "Do you feel weak?",
        "Do you have body pains?",
        "Do you have headache?",
        "Are you eating normally?",
        "Do you feel nauseous?",
        "Have you vomited?",
        "Do you have diarrhea?",
        "Are you coughing?",
        "Do you have sore throat?",
        "Do you have runny nose?",
        "Do you feel short of breath?",
        "Are you experiencing chest pain?",
        "Have you taken any medication?",
        "Did the medication help?",
        "Do you feel dizzy?",
        "Are you sleeping well?",
        "Do you have joint pains?",
        "Are your eyes painful?",
        "Do you feel cold?",
        "Have you traveled recently?",
        "Have you been around sick people?",
        "Do you have rashes?",
        "Are you drinking enough fluids?",
        "Do you have abdominal pain?",
        "Do you have burning urination?",
        "Do you have back pain?",
        "Do you feel confused?",
        "Have you fainted?",
        "Do you have neck stiffness?",
        "Are you breathing fast?",
        "Do you have chest tightness?",
        "Are you coughing blood?",
        "Do you feel tired all day?",
        "Is the fever worse at night?",
        "Do you sweat at night?",
        "Have you lost weight?",
        "Are you feeling anxious?",
        "Do you have swelling?",
        "Are your hands shaking?",
        "Do you feel dehydrated?",
        "Do you feel pain when swallowing?",
        "Do you have ear pain?",
        "Do you have tooth pain?",
        "Is this your first time experiencing this?",
        "Where exactly is the pain?",
        "When did it start?",
        "Is the pain sharp or dull?",
        "Does it move anywhere?",
        "Does eating worsen it?",
        "Does eating relieve it?",
        "Have you vomited blood?",
        "Is there blood in stool?",
        "Do you have constipation?",
        "Do you have diarrhea?",
        "Is the stool watery?",
        "Is the stool black?",
        "Is the stool hard?",
        "Do you feel bloated?",
        "Do you pass gas normally?",
        "Do you feel heartburn?",
        "Do you have difficulty swallowing?",
        "Do you feel full quickly?",
        "Have you lost appetite?",
        "Have you lost weight?",
        "Do you drink alcohol?",
        "Do you smoke?",
        "Have you eaten outside recently?",
        "Did anyone else eat the same food?",
        "Do you feel weak?",
        "Are you passing urine normally?",
        "Is there pain when urinating?",
        "Do you wake up at night to urinate?",
        "Is your urine dark?",
        "Is your urine foamy?",
        "Are you pregnant?",
        "When was your last period?",
        "Is there vaginal discharge?",
        "Is there vaginal bleeding?",
        "Do you have lower back pain?",
        "Does the pain wake you from sleep?",
        "Does movement worsen it?",
        "Have you had surgery before?",
        "Do you have ulcers?",
        "Have you taken painkillers?",
        "Did the pain start suddenly?",
        "Is the pain severe?",
        "Is it getting worse?",
        "Does it come and go?",
        "Have you been hospitalized before?",
        "Do you have diabetes?",
        "Do you have hypertension?",
        "Are you on medication?",
        "Did you miss any dose?",
        "Are you allergic to any drugs?",
        "Do you have cough?",
        "Is the cough dry?",
        "Is there sputum?",
        "What color is the sputum?",
        "Do you have chest pain?",
        "Is breathing difficult?",
        "Do you wheeze?",
        "Do you use inhaler?",
        "Do you have asthma?",
        "Do you have tuberculosis?",
        "Have you been tested?",
        "Are you vaccinated?",
        "Do you smoke?",
        "For how long?",
        "Do you feel tired?",
        "Are your lips turning blue?",
        "Do you sweat at night?",
        "Have you lost weight?",
        "Are you exposed to dust?",
        "Do you work in factory?",
        "Do you have allergies?",
        "Do you sneeze frequently?",
        "Do you have chest tightness?",
        "Does it worsen at night?",
        "Does exercise worsen it?",
        "Do you have leg swelling?",
        "Do you wake up gasping?",
        "Do you sleep with pillows?",
        "Do you snore loudly?",
        "Have you fainted?",
        "Do you feel dizzy?",
        "Do you have fever?",
        "Do you cough blood?",
        "Is the pain sharp?",
        "Is it worse when breathing?",
        "Have you traveled?",
        "Did symptoms start suddenly?",
        "Are you anxious?",
        "Do you feel panic?",
        "Do you feel suffocated?",
        "Are you pregnant?",
        "Are you overweight?",
        "Have you had COVID before?",
        "Are you vaccinated for COVID?",
        "Do you have heart disease?",
        "Are you on oxygen?",
        "Do you have chest trauma?",
        "Did you fall?",
        "Did someone hit you?",
        "Is breathing painful?",
        "Did you lose consciousness?",
        "How long were you unconscious?",
        "Did you shake?",
        "Did you bite your tongue?",
        "Did you urinate on yourself?",
        "Do you have headache?",
        "Is it severe?",
        "Is it worst headache ever?",
        "Do you have blurred vision?",
        "Do you see double?",
        "Do you feel numbness?",
        "Do you feel weakness?",
        "Is one side weaker?",
        "Did it start suddenly?",
        "Do you have speech difficulty?",
        "Do you feel confused?",
        "Do you have memory loss?",
        "Do you have tremors?",
        "Do you feel dizzy?",
        "Does the room spin?",
        "Do you vomit?",
        "Do you have neck stiffness?",
        "Do you have light sensitivity?",
        "Have you had stroke before?",
        "Do you have hypertension?",
        "Do you have diabetes?",
        "Do you drink alcohol?",
        "Do you use drugs?",
        "Did you hit your head?",
        "When did it happen?",
        "Do you have seizures before?",
        "Are you on medication?",
        "Did you miss dose?",
        "Do you sleep well?",
        "Do you feel stressed?",
        "Are you depressed?",
        "Do you hear voices?",
        "Do you see things others don’t?",
        "Do you feel hopeless?",
        "Do you have suicidal thoughts?",
        "Are you eating well?",
        "Have you lost weight?",
        "Do you feel weak?",
        "Do you have fever?",
        "Are you pregnant?",
        "Are you breastfeeding?",
        "Have you traveled?",
        "Do you have cancer?",
        "Are you on chemotherapy?",
        "Did symptoms worsen?",
        "Did you fall recently?",
        "When did the injury occur?",
        "Where were you when it happened?",
        "Did you hit your head?",
        "Did you lose consciousness?",
        "Are you bleeding anywhere?",
        "Is the bleeding heavy?",
        "Do you have swelling?",
        "Is the area painful?",
        "Can you move the injured part?",
        "Does movement worsen the pain?",
        "Did you hear a crack sound?",
        "Is there deformity?",
        "Are you able to walk?",
        "Did someone hit you?",
        "Was it a road traffic accident?",
        "Were you wearing a seatbelt?",
        "Were you riding a motorcycle?",
        "Did you wear a helmet?",
        "Are you feeling dizzy?",
        "Do you have blurred vision?",
        "Are you vomiting?",
        "Is there neck pain?",
        "Do you feel numbness?",
        "Do you feel weakness in any limb?",
        "Is there chest pain after the injury?",
        "Do you have difficulty breathing?",
        "Is there abdominal pain after the injury?",
        "Did the injury involve sharp objects?",
        "Is the wound deep?",
        "Has the wound been cleaned?",
        "Did you apply anything on the wound?",
        "Are you vaccinated for tetanus?",
        "When was your last tetanus shot?",
        "Is there pus from the wound?",
        "Is the wound getting bigger?",
        "Do you have fever after the injury?",
        "Are you feeling weak?",
        "Have you taken pain medication?",
        "Did the pain improve?",
        "Is the pain severe?",
        "Does the pain spread?",
        "Is there bruising?",
        "Can you bear weight on the limb?",
        "Is there stiffness?",
        "Have you had similar injury before?",
        "Did you seek treatment already?",
        "Were X-rays done?",
        "Were you given a cast?",
        "Is the pain getting worse?",
        "When was your last menstrual period?",
        "Are your periods regular?",
        "Have you missed your period?",
        "Have you done a pregnancy test?",
        "Is the test positive?",
        "Do you have lower abdominal pain?",
        "Is there vaginal bleeding?",
        "Is the bleeding heavy?",
        "Are there blood clots?",
        "Do you feel dizzy?",
        "Have you fainted?",
        "Are you vomiting excessively?",
        "Are you able to eat?",
        "Do you have breast tenderness?",
        "Do you feel fetal movement?",
        "How many weeks pregnant are you?",
        "Have you attended antenatal clinic?",
        "Is this your first pregnancy?",
        "How many children do you have?",
        "Have you had miscarriage before?",
        "Have you had cesarean section before?",
        "Do you have high blood pressure?",
        "Do you have diabetes?",
        "Do you have swelling of legs?",
        "Do you have severe headache?",
        "Do you have blurred vision?",
        "Do you have upper abdominal pain?",
        "Is there watery discharge?",
        "Did your water break?",
        "Are you having contractions?",
        "How frequent are the contractions?",
        "Do you feel pressure below?",
        "Have you had fever?",
        "Is there foul-smelling discharge?",
        "Do you have itching?",
        "Do you have painful urination?",
        "Are you using contraception?",
        "What method are you using?",
        "Do you have irregular bleeding?",
        "Do you have pelvic pain?",
        "Do you experience painful periods?",
        "Is the pain severe during menstruation?",
        "Do you have excessive menstrual bleeding?",
        "Do you pass large clots?",
        "Have you had fibroids before?",
        "Have you had ovarian cysts before?",
        "Have you had sexually transmitted infections?",
        "Are you currently on any medication?",
        "Have you had recent surgery?",
        "Are you breastfeeding?",
        "Do you have hypertension?",
        "How long have you had hypertension?",
        "Are you taking medication regularly?",
        "Did you miss any dose recently?",
        "Do you monitor your blood pressure?",
        "What was your last reading?",
        "Do you have diabetes?",
        "How long have you had diabetes?",
        "Are you on insulin?",
        "Do you check your blood sugar regularly?",
        "What was your last blood sugar reading?",
        "Do you have frequent urination?",
        "Do you feel excessive thirst?",
        "Have you lost weight unintentionally?",
        "Do you have heart disease?",
        "Have you had heart attack before?",
        "Do you experience chest pain on exertion?",
        "Do you have leg swelling?",
        "Do you sleep with multiple pillows?",
        "Do you wake up breathless at night?",
        "Do you have asthma?",
        "How often do you use inhaler?",
        "Have you been hospitalized for asthma?",
        "Do you have kidney disease?",
        "Do you have reduced urine output?",
        "Do you have liver disease?",
        "Do you have yellowing of eyes?",
        "Do you drink alcohol?",
        "How often do you drink alcohol?",
        "Do you smoke cigarettes?",
        "For how many years have you smoked?",
        "Do you have cancer?",
        "What type of cancer?",
        "Are you on chemotherapy?",
        "Do you have thyroid disease?",
        "Are you on thyroid medication?",
        "Do you feel excessively hot or cold?",
        "Do you have joint pains?",
        "Do you have arthritis?",
        "Is the joint swollen?",
        "Do you have HIV?",
        "Are you on antiretroviral therapy?",
        "Are you taking medication consistently?",
        "Have you had tuberculosis?",
        "Have you completed treatment?",
        "Do you have sickle cell disease?",
        "Have you had crisis recently?",
        "Do you have chronic headaches?",
        "Do you have chronic back pain?",
        "Is your condition stable?",
        "What medications are you currently taking?",
        "Do you know the names of your medications?",
        "Are you allergic to any drugs?",
        "What happens when you take the drug?",
        "Have you had surgery before?",
        "When was your last surgery?",
        "Did you have complications?",
        "Have you been hospitalized recently?",
        "How long were you admitted?",
        "Do you have family history of hypertension?",
        "Do you have family history of diabetes?",
        "Is there family history of cancer?",
        "Do you exercise regularly?",
        "How often do you exercise?",
        "Do you eat balanced diet?",
        "Do you consume a lot of salt?",
        "Do you consume sugary drinks often?",
        "How many hours do you sleep?",
        "Do you feel rested after sleep?",
        "Do you feel stressed frequently?",
        "Do you have anxiety?",
        "Do you feel depressed?",
        "Do you have support at home?",
        "Who do you live with?",
        "Do you work currently?",
        "What is your occupation?",
        "Are you exposed to chemicals at work?",
        "Do you use protective equipment?",
        "Have you traveled recently?",
        "Have you received vaccinations?",
        "When was your last vaccination?",
        "Have you tested positive for COVID before?",
        "Do you have long-term symptoms after COVID?",
        "Do you experience fatigue often?",
        "Do you have difficulty concentrating?",
        "Do you have memory issues?",
        "Do you have difficulty walking?",
        "Do you use walking aids?",
        "Have you fallen recently?",
        "Do you have vision problems?",
        "Do you use glasses?",
        "Do you have hearing problems?",
        "Do you use hearing aids?",
        "Do you have dental problems?",
        "When was your last dental visit?",
        "Do you drink enough water daily?",
        "Do you feel safe at home?",
        "Is there anything else bothering you?",
        "Is there any symptom we have not discussed?",
        "Do you have any other concerns today?"
      ]
    },

    yoruba: {
      doctor: [
        "Aláìsàn yìí ti ní ibà fún ọjọ́ mẹ́ta.",
        "Ọmọ náà ní ibà gbígbóná tó kọ̀ jálẹ̀.",
        "Àyà dídùn ti wà fún ọjọ́ méjì.",
        "Aláìsàn náà sọ pé àyà òun fún pọ̀ gan-an.",
        "Ìṣòro wà láti mí.",
        "Ọmọ náà ń mí kíákíá.",
        "Aláìsàn náà ní ikọ́ tó kọ̀ jálẹ̀.",
        "Ikọ́ náà ń gbé gárágá pupa fẹ́rẹ́fẹ́ jáde.",
        "Ìròyìn wà pé ó ti ń bì.",
        "Ọmọ náà ti bì ní ẹ̀mọ́rùn-ún lónìí.",
        "Inú rírun ń yọ aláìsàn lẹ́nu.",
        "Ó ń ya ìgbẹ́ omi ní ẹ̀mẹ́ta lójúmọ́.",
        "Aláìsàn náà sọ pé orí ń dun òun.",
        "Orí dídùn náà le, kò sì dúró.",
        "Inú rírun wà.",
        "Inú ń dun ọmọ náà gan-an.",
        "Ẹsẹ̀ méjèèjì wú.",
        "Aláìsàn náà sọ pé ẹsẹ̀ ń dun òun.",
        "Ọmọ náà gbé nǹkan ní ilé.",
        "Ó dákẹ́.",
        "Aláìsàn náà sọ pé òòyì ń kọ òun.",
        "Gbogbo ara ló dẹwọ́.",
        "Ọmọ náà kì í jẹun dáadáa.",
        "Ìtọ́ rẹ̀ kò pọ̀ mọ́.",
        "Ẹ̀jẹ̀ wà nínú ìgbẹ́ aláìsàn náà.",
        "Ẹ̀jẹ̀ wà nínú èébì náà.",
        "Ọmọ náà ń sunkún láidúró.",
        "Aláìsàn náà ń gun òfìfí lálẹ́.",
        "Ara rẹ̀ rù jojo.",
        "Aláìsàn náà sọ pé ọkàn òun ń lù kìkì.",
        "Oríkèé ara ń dun ún.",
        "Ọrùn ọmọ náà le kankan.",
        "Aláìsàn náà sọ pé ẹ̀yìn ń dun òun.",
        "Ojú rẹ̀ wú.",
        "Ọmọ náà ní ìrorẹ́ lára.",
        "Aláìsàn náà sọ pé ara ń ya òun.",
        "Ohun kan ń jáde látinú etí.",
        "Imú ọmọ náà dípò.",
        "Ọ̀nà ọ̀fun ń dun aláìsàn náà.",
        "Ìtọ́ títọ̀ ń dun ún.",
        "Ìgbóná ara rẹ̀ jẹ́ mọ́kandínlógójì.",
        "Ìgbóná ara rẹ̀ jẹ́ méjì-dín-lógójì àti ààbọ̀.",
        "Ìlù-ọkàn rẹ̀ jẹ́ ọgọ́fà láàárín ìṣẹ́jú kan.",
        "Ìlù-ọkàn rẹ̀ jẹ́ ọgọ́rin láàárín ìṣẹ́jú kan.",
        "Bí ó ṣe ń mí jẹ́ ogójì láàárín ìṣẹ́jú kan.",
        "Bí ó ṣe ń mí jẹ́ ogún láàárín ìṣẹ́jú kan.",
        "Ìwọ̀n ẹ̀jẹ̀ rẹ̀ jẹ́ àádọ́rin lórí ọgọ́ta.",
        "Ìwọ̀n ẹ̀jẹ̀ rẹ̀ jẹ́ ogóje lórí àádọ́rùn-ún.",
        "Ìwọ̀n afẹ́fẹ́ inú ẹ̀jẹ̀ jẹ́ ìdá méjì-dín-lọ́gọ́rùn-ún.",
        "Ìwọ̀n afẹ́fẹ́ inú ẹ̀jẹ̀ jẹ́ ìdá méjì-dín-lọ́gọ́rùn-ún.",
        "Ọkàn aláìsàn náà ń lù kánkán.",
        "Ìwọ̀n ẹ̀jẹ̀ aláìsàn náà rẹlẹ̀ jù.",
        "Ara ọmọ náà gbóná.",
        "Omi ti tán ní ara aláìsàn náà.",
        "Sísan ẹ̀jẹ̀ padà sínú ẹran-ara gùn jù.",
        "Aláìsàn náà rẹ̀.",
        "Ètè rẹ̀ ti ń yí padà sí àwọ̀ búlúù.",
        "Ọmọ náà rẹwọ́ gan-an.",
        "Aláìsàn náà jí pépé ó sì mọ ibi tí ó wà.",
        "Ìwọ̀n mímọ̀-nǹkan-sí jẹ́ mẹ́wàá nínú mẹ́ẹ̀ẹ́dógún.",
        "Ṣúgà inú ẹ̀jẹ̀ rẹ̀ kéré jù.",
        "Ṣúgà inú ẹ̀jẹ̀ rẹ̀ ti ga sókè.",
        "Aláìsàn náà ń tiraka láti mí.",
        "Ojú ọmọ náà jinú.",
        "Ẹ̀jẹ̀ kò tètè padà sínú awọ ara.",
        "Ìlù-ọkàn aláìsàn náà lágbára gan-an.",
        "Ìlù-ọkàn ọmọ náà kò lágbára.",
        "Ara aláìsàn náà kò gbóná mọ́.",
        "Mímí rẹ̀ gba agbára gan-an.",
        "Gbogbo ìwọ̀n ara aláìsàn náà wà ní dídá.",
        "Ọ̀ràn pàjáwìrì nìyí.",
        "Aláìsàn yìí nílò ìtọ́jú kíákíá.",
        "Ọmọ náà ṣe àìsàn tó le gan-an.",
        "Omi ara ti tán pátápátá.",
        "Ara aláìsàn náà ti gba shock.",
        "Lílo ohun èlò láti jí i dìde pọndandan.",
        "Ọ̀nà mímí rẹ̀ kò mọ́.",
        "Ìṣòro mímí rẹ̀ le gan-an.",
        "Ọmọ náà ò mọ nǹkan mọ́.",
        "Aláìsàn náà ń ja mímí.",
        "Ẹ̀jẹ̀ ń sun jáde lọ́wọ́lọ́wọ́.",
        "Aláìsàn náà ń ta gìrì lọ́wọ́lọ́wọ́.",
        "Agbára mímọ̀-nǹkan rẹ̀ kò dúró sójú kan.",
        "Ọmọ náà kò mọ ohun tó ń ṣẹlẹ̀.",
        "Ẹ kọ́kọ́ bójútó ọ̀ràn yìí.",
        "À ń fura sí àìsàn meningitis.",
        "Aláìsàn náà ní ibà mọ̀léríà tó le.",
        "À ń fura sí kòkòrò nínú ẹ̀jẹ̀.",
        "Aláìsàn náà nílò afẹ́fẹ́ oxygen.",
        "Lílu iṣan fún oògùn pọndandan nísisìyí.",
        "Ọmọ náà ò jẹun dáadáa rárá.",
        "Ẹ̀jẹ̀ rẹ̀ kéré jọjọ.",
        "Aláìsàn yìí nílò kí á gbé e lọ sí ilé-ìwòsàn gíga.",
        "À ń fura sí àìsàn pneumonia.",
        "Ìwọ̀n ẹ̀jẹ̀ aláìsàn náà ga ju bó ti yẹ lọ.",
        "À ń fura sí àìsàn appendicitis.",
        "Àyà dídùn tó le ń yọ aláìsàn lẹ́nu.",
        "À ń fura sí àìsàn stroke.",
        "Giri ń ta ọmọ náà ní léraléra.",
        "Ara aláìsàn náà kò ì jòkòó dáadáa.",
        "Fún un ní paracetamol milligram mẹ́ẹ̀ẹ́dógún fún kílógírámù kọ̀ọ̀kan.",
        "Gba iṣan fún un ní ceftriaxone.",
        "Bẹ̀rẹ̀ amoxicillin ọgọ́rùn-ún méjì àti àádọ́ta ní ẹ̀mẹjì lójúmọ́.",
        "Fún un ní omi iyọ̀ àti ṣúgà lẹ́yìn ìgbẹ́ kọ̀ọ̀kan.",
        "Gba iṣan fún un ní oògùn artesunate.",
        "Bẹ̀rẹ̀ sí ní gba iṣan fún un ní omi nísisìyí.",
        "Fún un ní oxygen lítà márùn-ún nínú ìṣẹ́jú kan.",
        "Lo diazepam fún gìrì náà.",
        "Máa fún un ní oògùn zinc lójúmọ́.",
        "Bẹ̀rẹ̀ oògùn fún ìfúnpá gíga.",
        "Kọ oògùn metronidazole ọgọ́rùn-ún mẹ́rin ní ẹ̀mẹ́ta lójúmọ́.",
        "Fún un ní ibuprofen láti dín ìrora kù.",
        "Lo oògùn salbutamol tí wọ́n ń fú sí imú.",
        "Bẹ̀rẹ̀ omi iṣan láti tọ́jú ara rẹ̀.",
        "Fún un ní ìwọ̀n phenobarbital tó pọ̀ ní ìbẹ̀rẹ̀.",
        "Gba ẹ̀jẹ̀ fún aláìsàn náà.",
        "Bẹ̀rẹ̀ oògùn kòkòrò láti ẹnu iṣan.",
        "Kọ oògùn iron tó ń jẹ láti ẹnu fún un.",
        "Fún un ní insulin gẹ́gẹ́ bí wọ́n ṣe kọ ọ́.",
        "Fún un ní oògùn ibà láti ẹnu.",
        "Fún un ní oògùn Vitamin A.",
        "Bẹ̀rẹ̀ oògùn kòkòrò láti ẹnu.",
        "Fún un ní oògùn tó ń dẹ́kun èébì.",
        "Gba iṣan fún un ní omi púpọ̀ lẹ́ẹ̀kan náà.",
        "Kọ oògùn ikọ́ olómi fún un.",
        "Bẹ̀rẹ̀ oògùn fún ọgbẹ́ inú.",
        "Fún un ní oògùn antihistamine láti ẹnu.",
        "Fún un ní abẹ́rẹ́ àjẹsára tetanus.",
        "Bẹ̀rẹ̀ oògùn fún ìrora.",
        "Ṣe ìtọ́jú tó yẹ láti gbé e ró.",
        "Fún un ní oògùn calcium.",
        "Fún un ní magnesium sulfate.",
        "Bẹ̀rẹ̀ oògùn corticosteroids.",
        "Ṣe ìtọ́jú mímí pẹ̀lú ohun èlò nebulizer.",
        "Kọ oògùn iyọ̀ àti ṣúgà fún un.",
        "Gba iṣan fún un ní paracetamol.",
        "Bẹ̀rẹ̀ oògùn kòkòrò tó lágbára.",
        "Gba iṣan fún un ní omi ṣúgà.",
        "Fún un ní nǹkan olómi láti mu.",
        "Gba abẹ́rẹ́ fún un sínú ẹran-ara.",
        "Fún un ní oògùn tó ń dẹ́kun ibà.",
        "Máa fún un ní oògùn kòkòrò nìṣó.",
        "Kọ oògùn ibà alájùmọ̀lò fún un.",
        "Fún un ní omi mu láti mú ara rẹ̀ le.",
        "Fún un ní oògùn tó ń mú ni sùn.",
        "Bẹ̀rẹ̀ ìtọ́jú antihistamine.",
        "Lo omi láti jí ara rẹ̀ padà.",
        "Fún un ní ìwọ̀n oògùn àkọ́kọ́ nísisìyí.",
        "Lo oògùn fún pàjáwìrì.",
        "Bẹ̀rẹ̀ ìtọ́jú tó tọ́.",
        "Aláìsàn yìí jẹ́ ọmọ ọkùnrin ọmọ ọdún márùn-ún tó ní ibà àti ikọ́.",
        "Ọmọ yìí jẹ́ ọmọ bìnrin ọmọ ọdún méì tí ó gbé nǹkan.",
        "Ọmọ ọdún mẹ́wàá ni ọmọ yìí tó ní inú rírun.",
        "Aláìsàn náà wá nítorí àyà dídùn àti ìṣòro mímí.",
        "Ìgbẹ́ gbuuru ti wà fún ọjọ́ mẹ́ta.",
        "Ọmọ náà wà ní dídá títí di ọjọ́ méjì sẹ́yìn.",
        "Àwọn àmì yìí bẹ̀rẹ̀ lójijì.",
        "Àìsàn náà ń peléke sí i.",
        "Kò sí ìròyìn pé ó fara pa.",
        "Aláìsàn náà kò ní oògùn kankan tí kì í jẹ fún un.",
        "Ó ti gba gbogbo abẹ́rẹ́ àjẹsára tó yẹ.",
        "Ọmọ náà gba abẹ́rẹ́ àjẹsára rẹ̀ ní kíkún.",
        "Ìtàn wà pé ó ṣẹ̀ṣẹ̀ rìnrìn-àjò.",
        "Wọ́n ti tọ́jú aláìsàn yìí ní ilé-ìwòsàn aládàáni kan rí.",
        "Ọmọ náà lo paracetamol ní ilé.",
        "Kò sí ìyípadà rere lẹ́yìn oògùn náà.",
        "Aláìsàn náà dà bí ẹni tó ń ṣàìsàn.",
        "Ara ọmọ náà kò balẹ̀ rárá.",
        "Ara aláìsàn náà ti balẹ̀.",
        "Ọ̀ràn yìí kò nira tó bẹ́ẹ̀.",
        "Aláìsàn náà nílò kí á máa wò ó nìṣó.",
        "A ó gba ọmọ náà sí ilé-ìwòsàn.",
        "Aláìsàn náà yóò padà sí ilé.",
        "Padà wá lẹ́yìn ọ̀sẹ̀ kan.",
        "Padà wá bí ara rẹ̀ bá burú sí i.",
        "Ẹ máa yẹ ìwọ̀n ara rẹ̀ wò nígbà gbogbo.",
        "Ẹ jẹ́ kí ó máa mu omi púpọ̀.",
        "Ẹ máa kọ ohun tó ń jẹ àti ohun tó ń tọ̀ sílẹ̀.",
        "Ẹ tẹ̀síwájú pẹ̀lú oògùn tí ó ń lò lọ́wọ́.",
        "Ẹ yẹ àbájáde àyẹ̀wò wò.",
        "Ẹ dábàá àyẹ̀wò ẹ̀jẹ̀ ní kíkún.",
        "Ẹ yẹ ẹ̀jẹ̀ wò fún kòkòrò ibà.",
        "Ẹ ya àyà rẹ̀ ní X-ray.",
        "Ẹ ṣe àyẹ̀wò ìtọ́ rẹ̀.",
        "Ẹ send ẹ̀jẹ̀ lọ fún àyẹ̀wò kòkòrò.",
        "Ẹ máa yẹ ìwọ̀n oxygen rẹ̀ wò.",
        "Ẹ tún un yẹ̀ wò lẹ́yìn ìtọ́jú.",
        "Ẹ máa ṣọ́nà fún ìṣòro mìíràn.",
        "Ẹ rí i pé ọ̀nà mímí rẹ̀ mọ́.",
        "Ẹ tẹ̀síwájú pẹ̀lú ìtọ́jú tó yẹ.",
        "Ẹ kọ ohun tí ẹ rí sílẹ̀ kedere.",
        "Ẹ sọ fún ẹni tó ń tọ́jú rẹ̀.",
        "Ẹ gba àwọn òbí rẹ̀ nímọ̀ràn tó tọ́.",
        "Ẹ ṣàlàyé ètò ìtọ́jú náà.",
        "Ẹ gba àṣẹ lẹ́yìn àlàyé.",
        "Ẹ fún wọn ní ẹ̀kọ́ nípa ìlera.",
        "Ẹ rí i pé ẹ bọ́wọ́ yín mọ́.",
        "Ẹ tẹ̀lé ìlànà ilé-ìwòsàn.",
        "Ẹ wá ìrànlọ́wọ́ gíga bí ó bá kù díẹ̀ káto.",
        "Èyí ni òpin àyẹ̀wò ìlera náà."
      ],
      patient: [
        "Nígbà wo ni ibà náà bẹ̀rẹ̀?",
        "Ǹjẹ́ ibà náà dúró sójú kan ni tàbí ó ń lọ ó ń bọ̀?",
        "Ǹjẹ́ o ti yẹ ìgbóná ara rẹ wò?",
        "Kí ni ìwọ̀n tó ga jù tí o rí kọ sílẹ̀?",
        "Ǹjẹ́ òtútù ń mú ọ?",
        "Ǹjẹ́ o ń gun òógùn jojo?",
        "Ǹjẹ́ ara rẹ dẹwọ́?",
        "Ǹjẹ́ gbogbo ara ń dun ọ?",
        "Ǹjẹ́ orí ń dun ọ?",
        "Ǹjẹ́ o ń jẹun dáadáa?",
        "Ǹjẹ́ o ń rí èébì?",
        "Ǹjẹ́ o ti bì?",
        "Ǹjẹ́ o ń ya ìgbẹ́ gbuuru?",
        "Ǹjẹ́ o ń gbẹ́kọ́?",
        "Ǹjẹ́ ọ̀nà ọ̀fun ń dun ọ?",
        "Ǹjẹ́ imú rẹ ń rọ̀?",
        "Ǹjẹ́ mímí ń nira fún ọ?",
        "Ǹjẹ́ àyà ń dun ọ?",
        "Ǹjẹ́ o ti lo oògùn kankan?",
        "Ǹjẹ́ oògùn náà ràn ọ́ lọ́wọ́?",
        "Ǹjẹ́ òòyì ń kọ ọ́?",
        "Ǹjẹ́ o ń sùn dáadáa?",
        "Ǹjẹ́ àwọn oríkèé ara rẹ ń dun ọ?",
        "Ǹjẹ́ ojú rẹ ń dun ọ?",
        "Ǹjẹ́ òtútù ń mú ọ?",
        "Ǹjẹ́ o rìnrìn-àjò láìpẹ́ yìí?",
        "Ǹjẹ́ o ti súnmọ́ àwọn tó ń ṣàìsàn?",
        "Ǹjẹ́ o ní ìrorẹ́ lára?",
        "Ǹjẹ́ o ń mu omi tó pọ̀ tó?",
        "Ǹjẹ́ inú ń dun ọ?",
        "Ǹjẹ́ ìtọ́ títọ̀ ń jóni?",
        "Ǹjẹ́ ẹ̀yìn ń dun ọ?",
        "Ǹjẹ́ ọpọlọ rẹ ń rú?",
        "Ǹjẹ́ o ti dákẹ́ rí?",
        "Ǹjẹ́ ọrùn rẹ le?",
        "Ǹjẹ́ o ń mí kíákíá?",
        "Ǹjẹ́ àyà rẹ fún pọ̀?",
        "Ǹjẹ́ o ń gbé ẹ̀jẹ̀ pọ̀ mọ́ ikọ́?",
        "Ǹjẹ́ o ń rẹwọ́ ní gbogbo ọjọ́?",
        "Ǹjẹ́ ibà náà ń burú sí i lálẹ́?",
        "Ǹjẹ́ o ń gun òógùn lálẹ́?",
        "Ǹjẹ́ o rù?",
        "Ǹjẹ́ ọkàn rẹ kò balẹ̀?",
        "Ǹjẹ́ ara rẹ wú?",
        "Ǹjẹ́ ọwọ́ rẹ ń gbọ̀n?",
        "Ǹjẹ́ omi ti tán lára rẹ?",
        "Ǹjẹ́ o ń nírara láti gbé oúnjẹ mì?",
        "Ǹjẹ́ etí ń dun ọ?",
        "Ǹjẹ́ eyín ń dun ọ?",
        "Ǹjẹ́ ìgbà àkọ́kọ́ nìyí tí o rí irú èyí?",
        "Níbo gan-an ni ìrora náà wà?",
        "Nígbà wo ni ó bẹ̀rẹ̀?",
        "Ǹjẹ́ ìrora náà mú gírí ni tàbí ó kàn ń kùn?",
        "Ǹjẹ́ ó ń lọ sí ibi kankan?",
        "Ǹjẹ́ jíjẹun ń mú un burú sí i?",
        "Ǹjẹ́ jíjẹun ń jẹ́ kí ó dín kù?",
        "Ǹjẹ́ o ti bì ní ẹ̀jẹ̀?",
        "Ǹjẹ́ ẹ̀jẹ̀ wà nínú ìgbẹ́ rẹ?",
        "Ǹjẹ́ ìgbẹ́ rẹ ń fún?",
        "Ǹjẹ́ o ń ya ìgbẹ́ gbuuru?",
        "Ǹjẹ́ ìgbẹ́ náà rí bí omi?",
        "Ǹjẹ́ ìgbẹ́ náà dúdú?",
        "Ǹjẹ́ ìgbẹ́ náà le?",
        "Ǹjẹ́ inú rẹ kún?",
        "Ǹjẹ́ o ń yọ̀fùn dáadáa?",
        "Ǹjẹ́ àyà ń jóni?",
        "Ǹjẹ́ o ń nírara láti gbé nǹkan mì?",
        "Ǹjẹ́ o ń yó kíákíá?",
        "Ǹjẹ́ oòrùn oúnjẹ ti kúrò lẹ́nu rẹ?",
        "Ǹjẹ́ o rù?",
        "Ǹjẹ́ o ń mu ọtí?",
        "Ǹjẹ́ o ń mu sìgá?",
        "Ǹjẹ́ o jẹun níta láìpẹ́ yìí?",
        "Ǹjẹ́ ẹlòmíràn jẹ irú oúnjẹ náà?",
        "Ǹjẹ́ ara rẹ dẹwọ́?",
        "Ǹjẹ́ o ń tọ̀ dáadáa?",
        "Ǹjẹ́ ìrora wà nígbà tí o bá ń tọ̀?",
        "Ǹjẹ́ o ń jí lálẹ́ láti tọ̀?",
        "Ǹjẹ́ ìtọ́ rẹ pọ́n?",
        "Ǹjẹ́ ìtọ́ rẹ ń gbé ìfúfú?",
        "Ǹjẹ́ o ti lóyún?",
        "Nígbà wo ni o rí nǹkan oṣù rẹ kẹ́yìn?",
        "Ǹjẹ́ nǹkan kan ń jáde lábé rẹ?",
        "Ǹjẹ́ ẹ̀jẹ̀ ń jáde lábé rẹ?",
        "Ǹjẹ́ ìdí rẹ ń dun ọ?",
        "Ǹjẹ́ ìrora náà ń jí ọ lójú oorun?",
        "Ǹjẹ́ rírìn ń mú un burú sí i?",
        "Ǹjẹ́ wọ́n ti ṣiṣẹ́ fún ọ rí?",
        "Ǹjẹ́ o ní ọgbẹ́ inú?",
        "Ǹjẹ́ o ti lo oògùn apakòrò-ìrora?",
        "Ǹjẹ́ ìrora náà bẹ̀rẹ̀ lójijì?",
        "Ǹjẹ́ ìrora náà le?",
        "Ǹjẹ́ ó ń burú sí i?",
        "Ǹjẹ́ ó ń lọ ó ń bọ̀?",
        "Ǹjẹ́ wọ́n ti gbà ọ́ sí ilé-ìwòsàn rí?",
        "Ǹjẹ́ o ní àìsàn ṣúgà?",
        "Ǹjẹ́ ìfúnpá rẹ ga?",
        "Ǹjẹ́ o ń lo oògùn?",
        "Ǹjẹ́ o kùnà láti lo oògùn rẹ?",
        "Ǹjẹ́ oògùn kankan wà tí kì í jẹ fún ọ?",
        "Ǹjẹ́ o ń gbẹ́kọ́?",
        "Ǹjẹ́ ikọ́ náà gbẹ?",
        "Ǹjẹ́ o ń gbé pilẹ̀ (gárágá)?",
        "Àwọ̀ wo ni pilẹ̀ náà?",
        "Ǹjẹ́ àyà ń dun ọ?",
        "Ǹjẹ́ mímí ń nira?",
        "Ǹjẹ́ o ń mí bíi fèrè?",
        "Ǹjẹ́ o ń lo oògùn ìfú-imú (inhaler)?",
        "Ǹjẹ́ o ní àìsàn ikọ́-fée?",
        "Ǹjẹ́ o ní àìsàn ikọ́-ẹjẹ̀ (TB)?",
        "Ǹjẹ́ wọ́n ti yẹ̀ ọ́ wò?",
        "Ǹjẹ́ o ti gba abẹ́rẹ́ àjẹsára?",
        "Ǹjẹ́ o ń mu sìgá?",
        "Fún ìgbà wo?",
        "Ǹjẹ́ ó ń rẹ̀ ọ́?",
        "Ǹjẹ́ ètè rẹ ń yí sí búlúù?",
        "Ǹjẹ́ o ń gun òógùn lálẹ́?",
        "Ǹjẹ́ o rù?",
        "Ǹjẹ́ o ń súnmọ́ ekuru?",
        "Ǹjẹ́ o ń ṣiṣẹ́ ní ilé-iṣẹ́ (factory)?",
        "Ǹjẹ́ ara rẹ ń ya nítorí nǹkan kan?",
        "Ǹjẹ́ o ń sín sín ní gbogbo ìgbà?",
        "Ǹjẹ́ àyà rẹ fún pọ̀?",
        "Ǹjẹ́ ó ń burú sí i lálẹ́?",
        "Ǹjẹ́ eré ṣíṣe ń mú un burú sí i?",
        "Ǹjẹ́ ẹsẹ̀ rẹ wú?",
        "Ǹjẹ́ o ń jí láti ja mímí?",
        "Ǹjẹ́ o ń lo irọ̀rí láti sùn?",
        "Ǹjẹ́ o ń han-run?",
        "Ǹjẹ́ o ti dákẹ́ rí?",
        "Ǹjẹ́ òòyì ń kọ ọ́?",
        "Ǹjẹ́ ara rẹ gbóná?",
        "Ǹjẹ́ o ń gbé ẹ̀jẹ̀ pọ̀ mọ́ ikọ́?",
        "Ǹjẹ́ ìrora náà mú gírí?",
        "Ǹjẹ́ ó ń burú sí i nígbà tí o bá ń mí?",
        "Ǹjẹ́ o rìnrìn-àjò?",
        "Ǹjẹ́ àwọn àmì yìí bẹ̀rẹ̀ lójijì?",
        "Ǹjẹ́ ọkàn rẹ kò balẹ̀?",
        "Ǹjẹ́ ẹ̀rù ń bà ọ́?",
        "Ǹjẹ́ ó ń ṣì ọ́ bíi pé o ń fẹ́ dákẹ́?",
        "Ǹjẹ́ o ti lóyún?",
        "Ǹjẹ́ o sanra jù?",
        "Ǹjẹ́ o ti ní àìsàn COVID rí?",
        "Ǹjẹ́ o ti gba abẹ́rẹ́ COVID?",
        "Ǹjẹ́ o ní àìsàn ọkàn?",
        "Ǹjẹ́ o ń lo oxygen?",
        "Ǹjẹ́ nǹkan kọ lu àyà rẹ?",
        "Ǹjẹ́ o ṣubú?",
        "Ǹjẹ́ ẹnìkan lù ọ́?",
        "Ǹjẹ́ mímí ń dun ọ?",
        "Ǹjẹ́ o dákẹ́ rí?",
        "Fún ìgbà wo ni o fi dákẹ́?",
        "Ǹjẹ́ o gbọ̀n?",
        "Ǹjẹ́ o bu ahọ́n rẹ sán?",
        "Ǹjẹ́ o tọ̀ sára?",
        "Ǹjẹ́ orí ń dun ọ?",
        "Ǹjẹ́ ó le?",
        "Ǹjẹ́ orí dídùn tó burú jù nìyí?",
        "Ǹjẹ́ ìríran rẹ kò mọ́?",
        "Ǹjẹ́ o ń rí nǹkan ní méjì-méjì?",
        "Ǹjẹ́ ara rẹ kú?",
        "Ǹjẹ́ ara rẹ dẹwọ́?",
        "Ǹjẹ́ apá kan dẹwọ́ jù?",
        "Ǹjẹ́ ó bẹ̀rẹ̀ lójijì?",
        "Ǹjẹ́ sísọ̀rọ̀ ń nira?",
        "Ǹjẹ́ ọpọlọ rẹ ń rú?",
        "Ǹjẹ́ o ń gbàgbé nǹkan?",
        "Ǹjẹ́ ara rẹ ń gbọ̀n?",
        "Ǹjẹ́ òòyì ń kọ ọ́?",
        "Ǹjẹ́ inú yàrá ń yí mọ́ ọ?",
        "Ǹjẹ́ o ń bì?",
        "Ǹjẹ́ ọrùn rẹ le?",
        "Ǹjẹ́ ojú rẹ kò gba ìmọ́lẹ̀?",
        "Ǹjẹ́ o ti ní àìsàn stroke rí?",
        "Ǹjẹ́ ìfúnpá rẹ ga?",
        "Ǹjẹ́ o ní àìsàn ṣúgà?",
        "Ǹjẹ́ o ń mu ọtí?",
        "Ǹjẹ́ o ń lo oògùn olóró?",
        "Ǹjẹ́ o kọ orí rẹ mọ́ nǹkan?",
        "Nígbà wo ni ó ṣẹlẹ̀?",
        "Ǹjẹ́ o ti ń ta gìrì rí?",
        "Ǹjẹ́ o ń lo oògùn?",
        "Ǹjẹ́ o kùnà láti lo oògùn rẹ?",
        "Ǹjẹ́ o ń sùn dáadáa?",
        "Ǹjẹ́ ọpọlọ rẹ ń gbóná?",
        "Ǹjẹ́ ọkàn rẹ bájẹ́?",
        "Ǹjẹ́ o ń gbọ́ ohùn?",
        "Ǹjẹ́ o ń rí nǹkan tí ẹlòmíràn ò rí?",
        "Ǹjẹ́ o lérò pé ayé ti parí?",
        "Ǹjẹ́ o ń lérò láti pa ara rẹ?",
        "Ǹjẹ́ o ń jẹun dáadáa?",
        "Ǹjẹ́ o rù?",
        "Ǹjẹ́ ara rẹ dẹwọ́?",
        "Ǹjẹ́ ara rẹ gbóná?",
        "Ǹjẹ́ o ti lóyún?",
        "Ǹjẹ́ o ń fọ́mọ lọ́mú?",
        "Ǹjẹ́ o rìnrìn-àjò?",
        "Ǹjẹ́ o ní àìsàn jẹjẹrẹ?",
        "Ǹjẹ́ o ń gba ìtọ́jú jẹjẹrẹ (chemo)?",
        "Ǹjẹ́ àwọn àmì náà burú sí i?",
        "Ǹjẹ́ o ṣubú láìpẹ́ yìí?",
        "Nígbà wo ni o fara pa?",
        "Níbo ni o wà nígbà tí ó ṣẹlẹ̀?",
        "Ǹjẹ́ o kọ orí mọ́ nǹkan?",
        "Ǹjẹ́ o dákẹ́ rí?",
        "Ǹjẹ́ ẹ̀jẹ̀ ń sun ní ibikankan?",
        "Ǹjẹ́ ẹ̀jẹ̀ náà pọ̀?",
        "Ǹjẹ́ ó wú?",
        "Ǹjẹ́ ibẹ̀ ń dun ọ?",
        "Ǹjẹ́ o lè gbé ibi tí o fara pa náà?",
        "Ǹjẹ́ mímì í ń mú ìrora náà burú sí i?",
        "Ǹjẹ́ o gbọ́ ìró fífọ́?",
        "Ǹjẹ́ ó yí padà kúrò ní ojú?",
        "Ǹjẹ́ o lè rìn?",
        "Ǹjẹ́ ẹnìkan lù ọ́?",
        "Ǹjẹ́ jàǹbá ọkọ̀ ni?",
        "Ǹjẹ́ o lo ìgbànú ọkọ̀?",
        "Ǹjẹ́ o gun alùpùpù?",
        "Ǹjẹ́ o lo ìbòrí (helmet)?",
        "Ǹjẹ́ òòyì ń kọ ọ́?",
        "Ǹjẹ́ ìríran rẹ kò mọ́?",
        "Ǹjẹ́ o ń bì?",
        "Ǹjẹ́ ọrùn ń dun ọ?",
        "Ǹjẹ́ ara rẹ kú?",
        "Ǹjẹ́ apá kan dẹwọ́?",
        "Ǹjẹ́ àyà ń dun ọ lẹ́yìn tí o fara pa?",
        "Ǹjẹ́ mímí ń nira fún ọ?",
        "Ǹjẹ́ inú ń dun ọ lẹ́yìn tí o fara pa?",
        "Ǹjẹ́ ohun mímú kan kàn ọ́?",
        "Ǹjẹ́ ọgbẹ́ náà jìn?",
        "Ǹjẹ́ wọ́n ti fọ ọgbẹ́ náà?",
        "Ǹjẹ́ o kan nǹkan kan mọ́ ọgbẹ́ náà?",
        "Ǹjẹ́ o ti gba abẹ́rẹ́ tetanus?",
        "Nígbà wo ni o gba abẹ́rẹ́ tetanus kẹ́yìn?",
        "Ǹjẹ́ oyún ń jáde nínú ọgbẹ́ náà?",
        "Ǹjẹ́ ọgbẹ́ náà ń fẹ̀ sí i?",
        "Ǹjẹ́ ara rẹ gbóná lẹ́yìn tí o fara pa?",
        "Ǹjẹ́ ara rẹ dẹwọ́?",
        "Ǹjẹ́ o ti lo oògùn ìrora?",
        "Ǹjẹ́ ìrora náà dín kù?",
        "Ǹjẹ́ ìrora náà le?",
        "Ǹjẹ́ ó ń tàn ká?",
        "Ǹjẹ́ ibẹ̀ pọ́n?",
        "Ǹjẹ́ o lè gbé ẹsẹ̀ náà?",
        "Ǹjẹ́ ó le?",
        "Ǹjẹ́ o ti ní irú ìfarapa yìí rí?",
        "Ǹjẹ́ o ti lọ sí ilé-ìwòsàn?",
        "Ǹjẹ́ wọ́n ya X-ray?",
        "Ǹjẹ́ wọ́n fi plaster (cast) fún ọ?",
        "Ǹjẹ́ ìrora náà ń burú sí i?",
        "Nígbà wo ni o rí nǹkan oṣù rẹ kẹ́yìn?",
        "Ǹjẹ́ nǹkan oṣù rẹ ń wá déédéé?",
        "Ǹjẹ́ o kùnà láti rí nǹkan oṣù rẹ?",
        "Ǹjẹ́ o ti yẹ oyún wò?",
        "Ǹjẹ́ àbájáde rẹ̀ jẹ́ bẹ́ẹ̀ ni?",
        "Ǹjẹ́ inú-ìsàlẹ̀ ń dun ọ?",
        "Ǹjẹ́ ẹ̀jẹ̀ ń jáde lábé rẹ?",
        "Ǹjẹ́ ẹ̀jẹ̀ náà pọ̀?",
        "Ǹjẹ́ ó ní kókó ẹ̀jẹ̀?",
        "Ǹjẹ́ òòyì ń kọ ọ́?",
        "Ǹjẹ́ o dákẹ́ rí?",
        "Ǹjẹ́ o ń bì jojo?",
        "Ǹjẹ́ o lè jẹun?",
        "Ǹjẹ́ ọmú ń dun ọ?",
        "Ǹjẹ́ o ń níràn mímì ọmọ nínú oyún?",
        "Ọ̀sẹ̀ mélòó ni oyún náà?",
        "Ǹjẹ́ o ti lọ sí ilé-ìwòsàn aboyún (antenatal)?",
        "Ǹjẹ́ oyún àkọ́kọ́ rẹ nìyí?",
        "Ọmọ mélòó ni o ní?",
        "Ǹjẹ́ oyún ti bà jẹ́ fún ọ rí?",
        "Ǹjẹ́ wọ́n ti ṣiṣẹ́ fún ọ láti bímọ rí (CS)?",
        "Ǹjẹ́ ìfúnpá rẹ ga?",
        "Ǹjẹ́ o ní àìsàn ṣúgà?",
        "Ǹjẹ́ ẹsẹ̀ rẹ wú?",
        "Ǹjẹ́ orí ń dun ọ gan-an?",
        "Ǹjẹ́ ìríran rẹ kò mọ́?",
        "Ǹjẹ́ inú-òkè ń dun ọ?",
        "Ǹjẹ́ omi ń jáde lábé rẹ?",
        "Ǹjẹ́ omi oyún rẹ bẹ́?",
        "Ǹjẹ́ oyún ń rọ́ ọ?",
        "Ǹjẹ́ ó ń rọ́ ọ ní léraléra?",
        "Ǹjẹ́ o ń níràn ìfúnpá ní ìsàlẹ̀?",
        "Ǹjẹ́ ara rẹ gbóná?",
        "Ǹjẹ́ nǹkan tó ń rùn ń jáde lábé rẹ?",
        "Ǹjẹ́ ibẹ̀ ń yà ọ́?",
        "Ǹjẹ́ ìtọ́ títọ̀ ń dun ọ?",
        "Ǹjẹ́ o ń lo ètò ìfọmọsọ́ni?",
        "Ilànà wo ni o ń lò?",
        "Ǹjẹ́ ẹ̀jẹ̀ ń jáde nígbà tí kò yẹ?",
        "Ǹjẹ́ inú ń dun ọ?",
        "Ǹjẹ́ nǹkan oṣù rẹ ń dun ọ?",
        "Ǹjẹ́ ìrora náà le nínú nǹkan oṣù?",
        "Ǹjẹ́ ẹ̀jẹ̀ nǹkan oṣù rẹ pọ̀ jù?",
        "Ǹjẹ́ kókó ẹ̀jẹ̀ ń jáde?",
        "Ǹjẹ́ o ti ní fibroid rí?",
        "Ǹjẹ́ o ti ní kókó nínú ilé-ọlọ́mọ rí?",
        "Ǹjẹ́ o ti ní àìsàn ìbálòpọ̀ rí?",
        "Ǹjẹ́ o ń lo oògùn kankan lọ́wọ́?",
        "Ǹjẹ́ wọ́n ṣiṣẹ́ fún ọ láìpẹ́ yìí?",
        "Ǹjẹ́ o ń fọ́mọ lọ́mú?",
        "Ǹjẹ́ ìfúnpá rẹ ga?",
        "Ọdún mélòó ni ó ti rí tí o ti ní ìfúnpá gíga?",
        "Ǹjẹ́ o ń lo oògùn rẹ déédéé?",
        "Ǹjẹ́ o gbàgbé láti lo oògùn rẹ láìpẹ́ yìí?",
        "Ǹjẹ́ o ń yẹ ìwọ̀n ẹ̀jẹ̀ rẹ wò?",
        "Kí ni ìwọ̀n tó gbẹ̀yìn?",
        "Ǹjẹ́ o ní àìsàn ṣúgà?",
        "Ọdún mélòó ni ó ti rí tí o ti ní àìsàn ṣúgà?",
        "Ǹjẹ́ o ń lo insulin?",
        "Ǹjẹ́ o ń yẹ ṣúgà rẹ wò déédéé?",
        "Kí ni ìwọ̀n ṣúgà rẹ tó gbẹ̀yìn?",
        "Ǹjẹ́ o ń tọ̀ ní gbogbo ìgbà?",
        "Ǹjẹ́ òùngbẹ ń gbẹ ọ jojo?",
        "Ǹjẹ́ o kàn rù láì jẹ́ pé o sọ̀rọ̀ rẹ̀?",
        "Ǹjẹ́ o ní àìsàn ọkàn?",
        "Ǹjẹ́ ọkàn rẹ ti dúró rí (heart attack)?",
        "Ǹjẹ́ àyà ń dun ọ nígbà tí o bá ń ṣiṣẹ́?",
        "Ǹjẹ́ ẹsẹ̀ rẹ wú?",
        "Ǹjẹ́ o ń lo irọ̀rí púpọ̀ láti sùn?",
        "Ǹjẹ́ o ń jí pẹ̀lú ìṣòro mímí lálẹ́?",
        "Ǹjẹ́ o ní àìsàn ikọ́-fée?",
        "Igbà mélòó ni o ń lo inhaler?",
        "Ǹjẹ́ o ti sùn ní ilé-ìwòsàn nítorí ikọ́-fée?",
        "Ǹjẹ́ o ní àìsàn kíndìnrín?",
        "Ǹjẹ́ ìtọ́ rẹ kò pọ̀ mọ́?",
        "Ǹjẹ́ o ní àìsàn ẹ̀dọ̀?",
        "Ǹjẹ́ ojú rẹ pọ́n?",
        "Ǹjẹ́ o ń mu ọtí?",
        "Ǹjẹ́ o ń mu ọtí ní gbogbo ìgbà?",
        "Ǹjẹ́ o ń mu sìgá?",
        "Ọdún mélòó ni o ti fi mu sìgá?",
        "Ǹjẹ́ o ní àìsàn jẹjẹrẹ?",
        "Irú jẹjẹrẹ wo?",
        "Ǹjẹ́ o ń gba chemotherapy?",
        "Ǹjẹ́ o ní àìsàn thyroid?",
        "Ǹjẹ́ o ń lo oògùn thyroid?",
        "Ǹjẹ́ ooru tàbí òtútù ń mú ọ jojo?",
        "Ǹjẹ́ àwọn oríkèé ara rẹ ń dun ọ?",
        "Ǹjẹ́ o ní arthritis?",
        "Ǹjẹ́ oríkèé náà wú?",
        "Ǹjẹ́ o ní HIV?",
        "Ǹjẹ́ o ń lo oògùn ART?",
        "Ǹjẹ́ o ń lo oògùn rẹ nígbà gbogbo?",
        "Ǹjẹ́ o ti ní àìsàn ikọ́-ẹjẹ̀ (TB) rí?",
        "Ǹjẹ́ o parí ìtọ́jú rẹ̀?",
        "Ǹjẹ́ o ní àìsàn ẹ̀jẹ̀ sísẹ̀ (sickle cell)?",
        "Ǹjẹ́ ó ti dì mọ́ ọ láìpẹ́ yìí?",
        "Ǹjẹ́ orí dídùn tó dípò ń yọ ọ́ lẹ́nu?",
        "Ǹjẹ́ ẹ̀yìn dídùn tó dípò ń yọ ọ́ lẹ́nu?",
        "Ǹjẹ́ ara rẹ balẹ̀?",
        "Oògùn wo ni o ń lò lọ́wọ́?",
        "Ǹjẹ́ o mọ orúkọ àwọn oògùn rẹ?",
        "Ǹjẹ́ oògùn kankan wà tí kì í jẹ fún ọ?",
        "Kí ni ó ń ṣẹlẹ̀ tí o bá lo oògùn náà?",
        "Ǹjẹ́ wọ́n ti ṣiṣẹ́ fún ọ rí?",
        "Nígbà wo ni iṣẹ́-abẹ kẹ́yìn?",
        "Ǹjẹ́ ìṣòro kankan wà lẹ́yìn iṣẹ́ náà?",
        "Ǹjẹ́ o ti sùn ní ilé-ìwòsàn láìpẹ́ yìí?",
        "Ọjọ́ mélòó ni o lò níbẹ̀?",
        "Ǹjẹ́ ìfúnpá gíga wà nínú ìdílé yín?",
        "Ǹjẹ́ àìsàn ṣúgà wà nínú ìdílé yín?",
        "Ǹjẹ́ àìsàn jẹjẹrẹ wà nínú ìdílé yín?",
        "Ǹjẹ́ o ń ṣe eré-ìdárayá?",
        "Igbà mélòó ni o ń ṣe eré-ìdárayá?",
        "Ǹjẹ́ o ń jẹun dáadáa?",
        "Ǹjẹ́ o ń lo iyọ̀ púpọ̀?",
        "Ǹjẹ́ o ń mu ohun olómi ṣúgà ní gbogbo ìgbà?",
        "Wákàtí mélòó ni o ń sùn?",
        "Ǹjẹ́ ara rẹ yá lẹ́yìn oorun?",
        "Ǹjẹ́ ọpọlọ rẹ ń gbóná ní gbogbo ìgbà?",
        "Ǹjẹ́ ọkàn rẹ kò balẹ̀?",
        "Ǹjẹ́ ọkàn rẹ bájẹ́?",
        "Ǹjẹ́ o ní ìrànlọ́wọ́ ní ilé?",
        "Ta ni o ń gbé pẹ̀lú rẹ?",
        "Ǹjẹ́ o ń ṣiṣẹ́ lọ́wọ́?",
        "Iṣẹ́ wo ni o ń ṣe?",
        "Ǹjẹ́ o ń súnmọ́ kẹ́míkà níbi iṣẹ́?",
        "Ǹjẹ́ o ń lo ohun ìdáàbòbò?",
        "Ǹjẹ́ o rìnrìn-àjò láìpẹ́ yìí?",
        "Ǹjẹ́ o ti gba abẹ́rẹ́ àjẹsára?",
        "Nígbà wo ni o gba abẹ́rẹ́ kẹ́yìn?",
        "Ǹjẹ́ o ti ní COVID rí?",
        "Ǹjẹ́ o ní àìmì kankan lẹ́yìn COVID?",
        "Ǹjẹ́ ó ń rẹ̀ ọ́ ní gbogbo ìgbà?",
        "Ǹjẹ́ ó ń nira láti rò nǹkan pọ̀?",
        "Ǹjẹ́ o ń gbàgbé nǹkan?",
        "Ǹjẹ́ rírìn ń nira?",
        "Ǹjẹ́ o ń lo ohun ìrànlọ́wọ́ láti rìn?",
        "Ǹjẹ́ o ṣubú láìpẹ́ yìí?",
        "Ǹjẹ́ ìṣòro ìríran wà?",
        "Ǹjẹ́ o ń lo dígí-ojú?",
        "Ǹjẹ́ ìṣòro ìgbọ́ràn wà?",
        "Ǹjẹ́ o ń lo ohun ìgbọ́ràn?",
        "Ǹjẹ́ ìṣòro eyín wà?",
        "Nígbà wo ni o lọ rí oníṣègùn-eyín?",
        "Ǹjẹ́ o ń mu omi tó pọ̀ tó lójúmọ́?",
        "Ǹjẹ́ o mọ̀ pé o wà ní àlàáfíà ní ilé?",
        "Ǹjẹ́ nǹkan mìíràn wà tó ń yọ ọ́ lẹ́nu?",
        "Ǹjẹ́ àmì kankan wà tí a kò tíì sọ̀rọ̀ lé lórí?",
        "Ǹjẹ́ o ní ohun mìíràn tí o fẹ́ sọ lónìí?"
      ]
    },

    pidgin: {
      doctor: [
        "The patient don get fever for three days now.",
        "The pikin fever high well-well and e no wan go.",
        "History dey say chest pain don dey for two days.",
        "The patient say e chest tight am well-well.",
        "E dey hard the person to breathe.",
        "The pikin dey breathe fast-fast.",
        "The patient get cough wey no wan gree stop.",
        "The cough dey bring out yellow mess.",
        "History dey say the person don dey vomit.",
        "The pikin don vomit five times today.",
        "The patient get running stomach.",
        "The person dey mess water-water three times every day.",
        "The patient say e head dey pain am.",
        "The headache heavy and e no wan stop.",
        "Belle dey pain the person.",
        "The pikin belle dey pain am well-well.",
        "The two legs don swell up.",
        "The patient say e leg dey pain am.",
        "The pikin shake for house.",
        "The person faint.",
        "The patient say e eye dey turn am.",
        "The whole body just weak.",
        "The pikin no dey chop well.",
        "The person no dey piss well again.",
        "Blood dey inside the patient shit.",
        "Blood dey inside wetin the person vomit.",
        "The pikin just dey cry no stop.",
        "The patient dey sweat for night.",
        "The person don lean well-well.",
        "The patient say e heart dey beat fast-fast.",
        "All e joints dey pain am.",
        "The pikin neck strong.",
        "The patient say e back dey pain am.",
        "The person face don swell up.",
        "The pikin body get rashes.",
        "The patient say e body dey scratch am.",
        "Something dey commot for the person ear.",
        "The pikin nose block.",
        "The patient throat dey pain am.",
        "E dey pain am as e dey piss.",
        "E body hot reach thirty-nine degrees.",
        "E body hot reach thirty-eight point five.",
        "E heart dey beat 120 times for one minute.",
        "E heart dey beat 80 times for one minute.",
        "E dey breathe 40 times for one minute.",
        "E dey breathe 20 times for one minute.",
        "Blood pressure na 90/60.",
        "Blood pressure na 140/90.",
        "Oxygen for e blood na 92 percent.",
        "Oxygen for e blood na 98 percent.",
        "The patient heart dey beat too fast.",
        "The patient blood pressure low well-well.",
        "The pikin get fever.",
        "Water don finish for the patient body.",
        "Blood dey take time to flow back to the skin.",
        "The patient eye/skin white.",
        "The person lips don dey turn blue.",
        "The pikin just weak, e no get strength at all.",
        "The patient eye clear and e know wetin dey happen.",
        "The person response na 10 over 15.",
        "The sugar for e blood low.",
        "The sugar for e blood don high.",
        "The patient dey struggle to breathe.",
        "The pikin eye don sink inside.",
        "Blood dey take time to flow back.",
        "The patient pulse dey kick hard.",
        "The pikin pulse weak well-well.",
        "The patient no get fever again.",
        "E dey use power breathe.",
        "Everything for the patient body dey normal.",
        "This case na emergency.",
        "This patient need quick-quick attention.",
        "This pikin sick well-well, e serious.",
        "Water don finish for e body patapata.",
        "The patient body don cold.",
        "We need to revive the person sharp-sharp.",
        "The way e dey breathe don get problem.",
        "The person struggle to breathe serious well-well.",
        "The pikin no know wetin dey happen again.",
        "The patient dey struggle to catch air.",
        "Blood dey commot well-well now.",
        "The patient dey shake now-now.",
        "The way e dey sense things no normal.",
        "The pikin no dey respond at all.",
        "Make una attend to this case first.",
        "We think say e fit be meningitis.",
        "The patient get serious malaria.",
        "We think say kòkòrò dey inside e blood.",
        "The patient need oxygen.",
        "We need to put line for e vein now-now.",
        "The pikin no get food for body at all.",
        "The person no get blood at all.",
        "This patient need urgent referral.",
        "We think say e fit be pneumonia.",
        "The patient blood pressure high well-well.",
        "We think say e fit be appendicitis.",
        "The patient get serious chest pain.",
        "We think say na stroke.",
        "The pikin dey seize again and again.",
        "The patient never set.",
        "Give paracetamol 15mg for every kilogram.",
        "Give am ceftriaxone through e vein.",
        "Start amoxicillin 250mg two times every day.",
        "Give am ORS after e shit any time.",
        "Give am artesunate through e vein.",
        "Start to give am drip now-now.",
        "Give am 5 liters of oxygen every minute.",
        "Use diazepam for the seizure.",
        "Give am zinc every day.",
        "Start medicine for high blood pressure.",
        "Give am metronidazole 400mg three times every day.",
        "Give am ibuprofen for the pain.",
        "Make e use salbutamol wey dem dey spray.",
        "Start drip to keep e body strong.",
        "Give am big dose of phenobarbital first.",
        "Give the patient blood.",
        "Start to give am antibiotics through e vein.",
        "Give am iron medicine for mouth.",
        "Give am insulin as dem talk am.",
        "Give am malaria medicine for mouth.",
        "Give am Vitamin A.",
        "Start antibiotics wey dem dey swallow.",
        "Give am medicine wey dey stop vomit.",
        "Rush drip enter e vein.",
        "Give am cough syrup.",
        "Start medicine for belle ulcer.",
        "Give am allergy medicine for mouth.",
        "Give am tetanus injection.",
        "Start medicine for pain.",
        "Give am all the care wey e need.",
        "Give am calcium medicine.",
        "Give am magnesium sulfate.",
        "Start corticosteroids medicine.",
        "Make e use that machine wey dey help person breathe.",
        "Give am ORS to drink.",
        "Give am paracetamol through e vein.",
        "Start antibiotics wey dey kill many germ.",
        "Give am sugar water through vein.",
        "Make e drink plenty liquid.",
        "Give am injection for inside muscle.",
        "Give am medicine wey dey drop fever.",
        "Continue to give am antibiotics.",
        "Give am combined malaria medicine.",
        "Make e dey drink water make e body no dry.",
        "Give am medicine wey go make am calm.",
        "Start medicine for allergy.",
        "Use plenty drip to bring am back.",
        "Give am the first big dose now-now.",
        "Give am emergency medicine.",
        "Start the right treatment.",
        "The patient na five-year-old boy with fever and cough.",
        "The pikin na two-year-old girl with seizure.",
        "This one na ten-year-old pikin with belle pain.",
        "The patient come with chest pain and breathing problem.",
        "E don dey mess water-water for three days.",
        "The pikin dey fine until two days ago.",
        "The thing just start one time.",
        "The sickness dey increase as time dey go.",
        "No be say e wound or fall.",
        "The patient no get allergy for any medicine.",
        "E don take all e injection.",
        "The pikin take all e vaccine finish.",
        "History dey say e just travel.",
        "Dem don treat the patient for private clinic before.",
        "The pikin don take paracetamol for house.",
        "The medicine no work, e no better.",
        "The patient look sick well-well.",
        "The pikin just dey vex anyhow.",
        "The patient don set small.",
        "This one na normal regular case.",
        "The patient need make we watch am.",
        "We go admit the pikin.",
        "The patient go go house.",
        "Come back for check-up in one week.",
        "Come back if the thing worse.",
        "Dey check e signs every time.",
        "Make am dey drink plenty liquid.",
        "Record wetin e drink and wetin e piss well.",
        "Make e continue the medicine e dey take.",
        "Check the result from lab.",
        "Go do complete blood test.",
        "Go check if malaria dey the blood.",
        "Go do chest X-ray.",
        "Go test e piss.",
        "Send blood go lab make dem check for germs.",
        "Dey check how oxygen dey inside e blood.",
        "Check am again after treatment.",
        "Watch out make another problem no start.",
        "Make sure say e way to breathe open.",
        "Keep on giving am all the care e need.",
        "Write everything wetin you see down well.",
        "Tell the person wey dey look after am.",
        "Give the parents better advice.",
        "Explain how the treatment go be.",
        "Make dem gree first before you start.",
        "Teach dem about health.",
        "Make sure say you wash your hand well.",
        "Follow the hospital rules.",
        "Call for more help if e pass your power.",
        "The check-up don finish for now."
      ],
      patient: [
        "When the fever start?",
        "The fever dey constant or e dey come and go?",
        "You don check your temperature?",
        "Which one be the highest temperature wey you record?",
        "Body dey shake you?",
        "You dey sweat well-well?",
        "You dey feel weak?",
        "Your body dey pain you?",
        "Your head dey pain you?",
        "You dey chop normal?",
        "You dey feel like say you wan vomit?",
        "You don vomit?",
        "Your stomach dey run?",
        "You dey cough?",
        "Your throat dey pain you?",
        "Your nose dey run?",
        "E dey hard you to breathe?",
        "Your chest dey pain you?",
        "You don take any medicine?",
        "The medicine help you?",
        "Your eye dey turn you?",
        "You dey sleep well?",
        "Your joints dey pain you?",
        "Your eye dey pain you?",
        "Cold dey catch you?",
        "You travel recently?",
        "You don dey near people wey dey sick?",
        "Rashes dey your body?",
        "You dey drink plenty water?",
        "Your belle dey pain you?",
        "Your piss dey pepper you?",
        "Your back dey pain you?",
        "Your head dey confuse?",
        "You don faint before?",
        "Your neck strong?",
        "You dey breathe fast-fast?",
        "Your chest tight?",
        "You dey cough blood?",
        "You dey feel tire throughout the day?",
        "The fever dey worse for night?",
        "You dey sweat for night?",
        "You don lean?",
        "Your mind no sit one place?",
        "Any part of your body swell?",
        "Your hand dey shake?",
        "You feel say water don finish for your body?",
        "E dey pain you as you dey swallow?",
        "Your ear dey pain you?",
        "Your teeth dey pain you?",
        "Na the first time be this?",
        "Where the pain dey exactly?",
        "When e start?",
        "The pain dey do like needle or e just dey heavy?",
        "The pain dey move go anywhere?",
        "If you chop, e dey worse?",
        "If you chop, the pain dey go down?",
        "You don vomit blood?",
        "Blood dey inside your shit?",
        "Your shit dey strong?",
        "Your belle dey run?",
        "The shit be like water?",
        "The shit black?",
        "The shit hard?",
        "Your belle swell/tight?",
        "You dey mess normal?",
        "Your chest dey burn you?",
        "E dey hard you to swallow?",
        "You dey bellefull quick?",
        "You no get appetite again?",
        "You don lean?",
        "You dey drink alcohol?",
        "You dey smoke?",
        "You chop outside recently?",
        "Other people chop that same food?",
        "You dey feel weak?",
        "You dey piss normal?",
        "E dey pain you as you dey piss?",
        "You dey wake up for night to piss?",
        "Your piss dark?",
        "Your piss get foam?",
        "You get belle?",
        "When be the last time you see your period?",
        "Something dey commot for your private part?",
        "Blood dey commot for your private part?",
        "Your lower back dey pain you?",
        "The pain dey wake you from sleep?",
        "If you move, the pain dey worse?",
        "Dem don operate you before?",
        "You get ulcer?",
        "You don take medicine for pain?",
        "The pain start one time?",
        "The pain heavy?",
        "E dey worse?",
        "E dey come and go?",
        "Dem don admit you for hospital before?",
        "You get sugar sickness?",
        "Your blood pressure high?",
        "You dey take medicine?",
        "You miss any dose?",
        "Any medicine dey do you somehow?",
        "You dey cough?",
        "The cough dry?",
        "Mess (sputum) dey commot?",
        "Wetin be the color of the mess?",
        "Your chest dey pain you?",
        "E dey hard you to breathe?",
        "Your chest dey sound?",
        "You dey use inhaler?",
        "You get asthma?",
        "You get TB?",
        "Dem don test you?",
        "You don take vaccine?",
        "You dey smoke?",
        "For how long?",
        "You dey feel tire?",
        "Your lips dey turn blue?",
        "You dey sweat for night?",
        "You don lean?",
        "Dust dey affect you?",
        "You dey work for factory?",
        "Body dey scratch you for some things?",
        "You dey sneeze every time?",
        "Your chest tight?",
        "E dey worse for night?",
        "If you exercise, e dey worse?",
        "Your leg swell?",
        "You dey wake up dey find air?",
        "You dey use pillow sleep?",
        "You dey snore well-well?",
        "You don faint?",
        "Your eye dey turn you?",
        "You get fever?",
        "You dey cough blood?",
        "The pain sharp?",
        "E worse when you breathe?",
        "You travel?",
        "The thing start one time?",
        "Your mind no sit one place?",
        "Fear dey catch you?",
        "You feel say you wan choke?",
        "You get belle?",
        "You over fat?",
        "You don get COVID before?",
        "You don take COVID vaccine?",
        "You get heart problem?",
        "You dey use oxygen?",
        "Something hit your chest?",
        "You fall?",
        "Somebody hit you?",
        "E dey pain you to breathe?",
        "You faint?",
        "How long you faint for?",
        "You shake?",
        "You bite your tongue?",
        "You piss for body?",
        "Your head dey pain you?",
        "E heavy?",
        "Na the worst headache be this?",
        "You no dey see clear?",
        "You dey see double?",
        "Your body dey dead?",
        "Your body weak?",
        "One side weak pass the other?",
        "E start one time?",
        "E hard you to talk?",
        "Your head confuse?",
        "You dey forget things?",
        "Your body dey shake?",
        "Your eye dey turn you?",
        "The room dey spin?",
        "You dey vomit?",
        "Your neck strong?",
        "Light dey pain your eye?",
        "You don get stroke before?",
        "Your blood pressure high?",
        "You get sugar sickness?",
        "You dey drink?",
        "You dey use drugs?",
        "You hit your head?",
        "When e happen?",
        "You don dey seize before?",
        "You dey take medicine?",
        "You miss your dose?",
        "You dey sleep well?",
        "Stress dey worry you?",
        "Your mind down?",
        "You dey hear voices?",
        "You dey see wetin other people no dey see?",
        "You feel say hope no dey again?",
        "You dey think to kill yourself?",
        "You dey chop well?",
        "You don lean?",
        "You dey feel weak?",
        "You get fever?",
        "You get belle?",
        "You dey breastfeed?",
        "You travel?",
        "You get cancer?",
        "You dey take chemo?",
        "The thing dey worse?",
        "You fall recently?",
        "When the wound happen?",
        "Where you dey when e happen?",
        "You hit your head?",
        "You faint?",
        "Blood dey commot anywhere?",
        "The blood plenty?",
        "E swell?",
        "The place dey pain you?",
        "You fit move the place?",
        "If you move am, e dey pain pass?",
        "You hear any sound like say something break?",
        "The place bend?",
        "You fit walk?",
        "Somebody hit you?",
        "Na motor accident?",
        "You wear seatbelt?",
        "You ride okada?",
        "You wear helmet?",
        "Your eye dey turn you?",
        "You no dey see clear?",
        "You dey vomit?",
        "Your neck dey pain you?",
        "Your body dey dead?",
        "Any part of your body weak?",
        "Your chest pain you after the wound?",
        "E hard you to breathe?",
        "Your belle pain you after the wound?",
        "Sharp thing cut you?",
        "The wound deep?",
        "Dem don wash the wound?",
        "You put anything for the wound?",
        "You don take tetanus injection?",
        "When you take tetanus last?",
        "Pus dey commot for the wound?",
        "The wound dey big?",
        "You get fever after the wound?",
        "You dey feel weak?",
        "You don take medicine for pain?",
        "The pain go down?",
        "The pain heavy?",
        "The pain dey spread?",
        "The place black and blue?",
        "You fit put weight for the leg/hand?",
        "The place strong?",
        "You don get this kind wound before?",
        "You don go treat am before?",
        "Dem do X-ray?",
        "Dem put plaster (cast) for you?",
        "The pain dey worse?",
        "When be the last time you see your period?",
        "Your period dey regular?",
        "You miss your period?",
        "You don do pregnancy test?",
        "The test say you get belle?",
        "Your lower belle dey pain you?",
        "Blood dey commot for your private part?",
        "The blood plenty?",
        "The blood get kókó?",
        "Your eye dey turn you?",
        "You faint?",
        "You dey vomit well-well?",
        "You fit chop?",
        "Your breast dey pain you?",
        "You dey feel the pikin move?",
        "How many weeks the belle be?",
        "You don dey go clinic for the belle?",
        "Na your first belle be this?",
        "How many pikin you get?",
        "Belle don spoil for you before?",
        "Dem don operate you to born before?",
        "Your blood pressure high?",
        "You get sugar sickness?",
        "Your leg swell?",
        "Your head dey pain you well-well?",
        "You no dey see clear?",
        "Your upper belle dey pain you?",
        "Water dey commot for your private part?",
        "Your water don break?",
        "The belle dey worry you (contractions)?",
        "How the belle dey worry you (frequency)?",
        "You dey feel like say something wan commot for down?",
        "You get fever?",
        "The thing wey dey commot for your private part dey smell?",
        "The place dey scratch you?",
        "E dey pain you to piss?",
        "You dey do family planning?",
        "Which one you dey use?",
        "Blood dey commot for time wey no be period?",
        "Your pelvic place dey pain you?",
        "Your period dey pain you?",
        "The pain heavy for period time?",
        "The blood plenty well-well for period?",
        "Kókó ẹ̀jẹ̀ plenty?",
        "You get fibroid before?",
        "You get cysts before?",
        "You don get sickness for sex before?",
        "Any medicine you dey take now?",
        "Dem operate you recently?",
        "You dey breastfeed?",
        "Your blood pressure high?",
        "How long you don get high blood pressure?",
        "You dey take your medicine every time?",
        "You miss any dose recently?",
        "You dey check your blood pressure?",
        "Wetin be the last reading?",
        "You get sugar sickness?",
        "How long you don get am?",
        "You dey use insulin?",
        "You dey check your sugar?",
        "Wetin be the last sugar reading?",
        "You dey piss every time?",
        "Water dey hungry you well-well?",
        "You just lean without say you plan am?",
        "You get heart sickness?",
        "You don get heart attack before?",
        "Your chest dey pain you if you work?",
        "Your leg swell?",
        "You dey use many pillows sleep?",
        "You dey wake up find air for night?",
        "You get asthma?",
        "How many times you dey use inhaler?",
        "Dem don admit you for hospital for asthma?",
        "You get kidney sickness?",
        "The way you dey piss don reduce?",
        "You get liver sickness?",
        "Your eye dey yellow?",
        "You dey drink alcohol?",
        "How many times you dey drink?",
        "You dey smoke?",
        "For how many years you don dey smoke?",
        "You get cancer?",
        "Which kind cancer?",
        "You dey take chemo?",
        "You get thyroid sickness?",
        "You dey take thyroid medicine?",
        "Hot or cold dey catch you well-well?",
        "Your joints dey pain you?",
        "You get arthritis?",
        "The joint swell?",
        "You get HIV?",
        "You dey take ART medicine?",
        "You dey take am every time?",
        "You don get TB before?",
        "You finish the medicine?",
        "You be sickler?",
        "The thing don hold you recently?",
        "Headache wey no dey go dey worry you?",
        "Back pain wey no dey go dey worry you?",
        "The sickness don set?",
        "Which medicine you dey take now?",
        "You know the names of your medicine?",
        "Any medicine dey do you somehow?",
        "Wetin dey happen if you take the medicine?",
        "Dem don operate you before?",
        "When dem operate you last?",
        "Any problem happen after the operation?",
        "Dem admit you recently?",
        "How long you spend for hospital?",
        "Anybody for your family get high blood pressure?",
        "Anybody for your family get sugar sickness?",
        "Anybody for your family get cancer?",
        "You dey exercise?",
        "How many times you dey exercise?",
        "You dey chop better food?",
        "You dey use plenty salt?",
        "You dey drink sugary things every time?",
        "How many hours you dey sleep?",
        "Your body set after you sleep?",
        "Stress dey worry you every time?",
        "Your mind no sit one place?",
        "You dey feel down?",
        "Person dey for house to help you?",
        "Who you and dem dey stay?",
        "You dey work now?",
        "Wetin be your work?",
        "Chemical dey your work place?",
        "You dey wear protective thing for work?",
        "You travel recently?",
        "You don take vaccine?",
        "When be the last time you take vaccine?",
        "You don get COVID before?",
        "You still dey feel any sign after the COVID?",
        "You dey feel tire every time?",
        "E hard you to think?",
        "You dey forget things?",
        "E hard you to walk?",
        "You dey use stick or anything walk?",
        "You fall recently?",
        "Your eye get problem?",
        "You dey use glass?",
        "Your ear get problem?",
        "You dey use hearing aid?",
        "Your teeth get problem?",
        "When be the last time you see dentist?",
        "You dey drink enough water every day?",
        "You feel safe for house?",
        "Anything else dey worry you?",
        "Any other sign wey we never talk?",
        "Any other thing wey dey your mind today?"
      ]
    }
  };

  /* =========================
     STATE
     ========================= */

export default function App() {
  const [language, setLanguage] = useState("english");
  const [role, setRole] = useState("doctor");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speakerId, setSpeakerId] = useState("");
  const [sessionId, setSessionId] = useState(""); 
  const [audioURL, setAudioURL] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [recordedDuration, setRecordedDuration] = useState(null);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const generateSessionId = () => {
    const date = new Date().toISOString().split('T')[0]; // 2026-02-19
    const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase(); // e.g., XJ92L
    const finalId = `SESS-${date}-${randomStr}`; 
    setSessionId(finalId);
  };

  useEffect(() => {
    if (!speakerId || !speakerId.match(/^SPK\d{3}$/)) return;
    const fetchProgress = async () => {
      try {
        const response = await fetch(`https://cliniq-flow-backend.onrender.com/progress/${speakerId}?language=${language}&role=${role}`);
        const data = await response.json();
        
        if (data.next_sentence) {
          const nextIdx = data.next_sentence - 1;
          
          // IF SENTENCE IS NOT 1: Warn the user loudly
          if (nextIdx > 0 && !sessionId) {
            const msg = `ID ALREADY IN USE: ${speakerId} is on Sentence ${data.next_sentence}. 
            If this is NOT you, please change the Speaker ID now!`;
            
            setError(msg);
            alert(msg); // Forced pop-up so they can't ignore it
          } else {
            setError(""); // Clear error if it's a fresh ID
          }
          
          setCurrentIndex(nextIdx);
        }
      } catch (err) { 
        console.error("Progress fetch failed:", err); 
      }
      // try {
      //   const response = await fetch(`https://cliniq-flow-backend.onrender.com/progress/${speakerId}?language=${language}&role=${role}`);
      //   const data = await response.json();
      //   if (data.next_sentence) setCurrentIndex(data.next_sentence - 1);
      // } catch (err) { console.error(err); }
    };
    fetchProgress();
  }, [speakerId, language, role]);

  const startRecording = async () => {
    setError("");
    if (!speakerId.match(/^SPK\d{3}$/)) {
      setError("ERROR: Enter Speaker ID first (e.g., SPK001)");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4";
      mediaRecorderRef.current = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        if (startTime) setRecordedDuration((Date.now() - startTime) / 1000);
        setAudioURL(URL.createObjectURL(blob));
        setIsRecording(false);
        stream.getTracks().forEach(t => t.stop());
      };
      setStartTime(Date.now());
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) { setError("Mic Error: Please allow microphone access."); }
  };

  const uploadAudio = async (audioBlob, durationSeconds) => {
    setIsUploading(true);
    const isConvMode = sessionId && sessionId.trim() !== "";
    const endpoint = isConvMode 
      ? "https://cliniq-flow-backend.onrender.com/upload-conversation/" 
      : "https://cliniq-flow-backend.onrender.com/upload/";
    
    const formData = new FormData();
    formData.append("speaker_id", speakerId.toUpperCase());
    formData.append("role", role);
    formData.append("language", language);

    if (isConvMode) {
      formData.append("session_id", sessionId);
      formData.append("duration_seconds", Math.round(durationSeconds || 0));
      formData.append("file", audioBlob, `conv_${Date.now()}.wav`);
    } else {
      formData.append("sentence_id", currentIndex + 1);
      formData.append("sentence_text", sentences[language][role][currentIndex]);
      formData.append("file", audioBlob, `sent_${currentIndex + 1}.wav`);
    }

    try {
      const res = await fetch(endpoint, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed. Check internet.");
      setIsUploading(false);
      return true;
    } catch (err) {
      setError(err.message);
      setIsUploading(false);
      return false;
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#E32227" }}>CLINIQ-FLOW</h1>

      {/* INSTRUCTIONS */}
      <div style={{ backgroundColor: "#22E33E", border: "1px solid #ffeeba", padding: "15px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px" }}>
        <h4 style={{ margin: "0 0 10px 0" }}>IMPORTANT INSTRUCTIONS</h4>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>Ensure you are in a <strong>quiet room</strong> if possible.</li>
          <li>Enter <strong>Speaker ID</strong> (e.g., SPK001) first.</li>
          <li><strong>Conversation Mode:</strong> Click "Generate ID" ONLY for free talking.</li>
          <li>If recording sentences, leave the Session ID box <strong>EMPTY</strong>.</li>
          <li>Don't forget to click <strong>SAVE & NEXT</strong> after recording.</li>
          <li><strong>ID Check:</strong> If an alert says "ID TAKEN," pick a new ID (e.g., SPK500).</li>
        </ul>
      </div>

      {/* INPUTS */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <div style={{ flex: "1", minWidth: "150px" }}>
          <label style={{ fontSize: "11px", fontWeight: "bold" }}>SPEAKER ID</label>
          <input 
            placeholder="e.g. SPK001" 
            value={speakerId} 
            onChange={(e)=>setSpeakerId(e.target.value.toUpperCase())} 
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ fontSize: "11px", fontWeight: "bold" }}>LANGUAGE</label>
          <select value={language} onChange={(e)=>setLanguage(e.target.value)} style={{ display: "block", padding: "10px", width: "100%" }}>
            <option value="english">English</option>
            <option value="yoruba">Yoruba</option>
            <option value="pidgin">Pidgin</option>
            <option value="mixed">Mixed (Conv. Only)</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: "11px", fontWeight: "bold" }}>ROLE</label>
          <select value={role} onChange={(e)=>setRole(e.target.value)} style={{ display: "block", padding: "10px", width: "100%" }}>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
      </div>

      {/* SESSION ID BOX */}
      <div style={{ backgroundColor: "#22E33E", padding: "15px", borderRadius: "8px", border: "1px solid #dee2e6", marginBottom: "20px" }}>
        <button 
          onClick={generateSessionId} 
          style={{ float: "right", padding: "5px 12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
        >
          Generate ID
        </button>
        <label style={{ fontSize: "11px", fontWeight: "bold" }}>SESSION ID (CONVERSATION MODE)</label>
        <input 
          value={sessionId} 
          onChange={(e)=>setSessionId(e.target.value)} 
          placeholder="EMPTY = SENTENCE MODE | ID = CONVERSATION MODE" 
          style={{ width: "100%", marginTop: "5px", padding: "10px", border: "1px solid " + (sessionId ? "#28a745" : "#ccc"), borderRadius: "5px", boxSizing: "border-box", backgroundColor: sessionId ? "#eafff0" : "#fff" }}
        />
        <small style={{ color: "black", fontWeight: "bold", fontSize: "15px" }}>
          *Do NOT generate an ID if you are just reading the sentences below.
        </small>
      </div>

      {/* TEXT DISPLAY */}
      <div style={{ minHeight: "120px", background: "#22E33E", border: "2px solid #ffffff", padding: "20px", borderRadius: "8px", marginBottom: "20px", textAlign: "center" }}>
        {sessionId ? (
          <div style={{ color: "#28a745" }}>
            <h3 style={{ margin: "0" }}>CONVERSATION MODE ACTIVE</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>Script hidden. Record natural chat. No need to pause for interruptions.</p>
          </div>
        ) : (
          <>
            <span style={{ color: "#212529", fontSize: "11px", fontWeight: "bold" }}>SENTENCE {currentIndex + 1}</span>
            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "10px 0", lineHeight: "1.4" }}>
              {sentences[language]?.[role]?.[currentIndex] || "Loading script..."}
            </p>
          </>
        )}
      </div>

      {/* RECORD BUTTON */}
      <button 
        onClick={isRecording ? () => mediaRecorderRef.current.stop() : startRecording}
        style={{ 
          width: "100%", 
          padding: "20px", 
          fontSize: "18px", 
          fontWeight: "bold", 
          backgroundColor: isRecording ? "#dc3545" : "#212529", 
          color: "white", 
          border: "none", 
          borderRadius: "8px", 
          cursor: "pointer" 
        }}
      >
        {isRecording ? "STOP RECORDING" : "START RECORDING"}
      </button>

      {/* REVIEW AND SAVE */}
      {audioURL && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <audio src={audioURL} controls style={{ width: "100%" }} />
          <button 
            onClick={async () => {
              const blob = new Blob(chunksRef.current, {type: mediaRecorderRef.current.mimeType});
              if (await uploadAudio(blob, recordedDuration)) {
                setAudioURL(null);
                if (!sessionId) setCurrentIndex(prev => prev + 1);
                alert("Saved Successfully!");
              }
            }}
            disabled={isUploading}
            style={{ width: "100%", marginTop: "10px", padding: "15px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold" }}
          >
            {isUploading ? "UPLOADING..." : "SAVE & NEXT"}
          </button>
        </div>
      )}

      {error && <p style={{ color: "#dc3545", textAlign: "center", fontWeight: "bold", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "sans-serif" }}>
//       <h1 style={{ textAlign: "center", color: "#E32227" }}>CLINIQ-FLOW</h1>

//       {/* THE CRUCIAL INSTRUCTIONS */}
//       <div style={{ backgroundColor: "#fff3cd", border: "1px solid #ffeeba", padding: "15px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px" }}>
//         <h4 style={{ margin: "0 0 10px 0" }}>IMPORTANT INSTRUCTIONS</h4>
//         <ul style={{ margin: 0, paddingLeft: "20px" }}>
//           <li>Ensure you are in a <strong>quiet room</strong>.</li>
//           <li>Enter <strong>Speaker ID</strong> first (e.g., SPK001).</li>
//           <li>Click <strong>START RECORDING</strong>, wait 1 second, then speak clearly.</li>
//           <li>Click <strong>STOP RECORDING</strong> immediately after you finish speaking.</li>
//           <li><strong>Conversation Mode:</strong> Use "Generate ID" ONLY for free-form talking. Otherwise, leave it empty.</li>
//           <li>Listen to your recording before clicking <strong>SAVE & NEXT</strong>.</li>
//         </ul>
//       </div>

//       {/* PRIMARY INPUTS */}
//       <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         <div style={{ flex: "1", minWidth: "200px" }}>
//           <label style={{ fontSize: "12px", fontWeight: "bold" }}>SPEAKER ID</label>
//           <input 
//             placeholder="e.g. SPK001" 
//             value={speakerId} 
//             onChange={(e)=>setSessionId("") || setSpeakerId(e.target.value.toUpperCase())} 
//             style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }}
//           />
//         </div>
//         <div>
//           <label style={{ fontSize: "12px", fontWeight: "bold" }}>LANGUAGE</label>
//           <select value={language} onChange={(e)=>setLanguage(e.target.value)} style={{ display: "block", padding: "10px", width: "100%" }}>
//             <option value="english">English</option>
//             <option value="yoruba">Yoruba</option>
//             <option value="pidgin">Pidgin</option>
//             <option value="mixed">Mixed (Conv. Only)</option>
//           </select>
//         </div>
//         <div>
//           <label style={{ fontSize: "12px", fontWeight: "bold" }}>ROLE</label>
//           <select value={role} onChange={(e)=>setRole(e.target.value)} style={{ display: "block", padding: "10px", width: "100%" }}>
//             <option value="doctor">Doctor</option>
//             <option value="patient">Patient</option>
//           </select>
//         </div>
//       </div>

//       {/* SESSION CONFIGURATION */}
//       <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px", border: "2px solid #dee2e6", marginBottom: "25px" }}>
//         <label style={{ fontSize: "14px", fontWeight: "bold", color: "#333", display: "block", marginBottom: "10px" }}>
//           STEP 2: CHOOSE YOUR MODE
//         </label>
        
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          
//           {/* Option A: Sentences */}
//           {!sessionId && (
//             <div style={{ padding: "10px", border: "1px dashed #ccc", borderRadius: "5px", backgroundColor: "#fff" }}>
//               <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
//                 <strong>Current Mode:</strong> Reading Sentences (Script is visible below)
//               </p>
//             </div>
//           )}

//           {/* THE BIG BUTTON */}
//           <button 
//             onClick={generateSessionId} 
//             style={{ 
//               width: "100%", 
//               padding: "12px", 
//               backgroundColor: "#007bff", 
//               color: "white", 
//               border: "none", 
//               borderRadius: "5px", 
//               fontWeight: "bold",
//               cursor: "pointer",
//               boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
//             }}
//           >
//             CLICK HERE FOR CONVERSATION MODE (FREE TALKING)
//           </button>

//           {/* THE INPUT BOX */}
//           <div style={{ marginTop: "5px" }}>
//             <label style={{ fontSize: "11px", color: "#555" }}>SESSION ID (Auto-fills when you click the blue button):</label>
//             <input 
//               value={sessionId} 
//               onChange={(e)=>setSessionId(e.target.value)} 
//               placeholder="--- EMPTY (SENTENCE MODE) ---" 
//               style={{ 
//                 width: "100%", 
//                 marginTop: "5px", 
//                 padding: "12px", 
//                 border: "2px solid " + (sessionId ? "#28a745" : "#ccc"), 
//                 borderRadius: "5px", 
//                 boxSizing: "border-box",
//                 textAlign: "center",
//                 fontWeight: "bold",
//                 backgroundColor: sessionId ? "#eafff0" : "#fff"
//               }}
//             />
//           </div>

//           {sessionId && (
//             <button 
//               onClick={() => setSessionId("")} 
//               style={{ fontSize: "12px", color: "#dc3545", background: "none", border: "none", textDecoration: "underline", cursor: "pointer" }}
//             >
//               Switch back to Sentence Mode (Clear ID)
//             </button>
//           )}
//         </div>
//       </div>

//       {/* TEXT TO READ AREA */}
//       <div style={{ minHeight: "120px", background: "#ffffff", border: "2px solid #E32227", padding: "20px", borderRadius: "8px", marginBottom: "20px", textAlign: "center" }}>
//         {sessionId ? (
//           <div style={{ color: "#28a745" }}>
//             <h3 style={{ margin: "0" }}>CONVERSATION MODE ACTIVE</h3>
//             <p style={{ color: "#666", fontSize: "14px" }}>Script hidden. Record natural conversation between Doctor and Patient.</p>
//           </div>
//         ) : (
//           <>
//             <span style={{ color: "#666", fontSize: "11px", fontWeight: "bold" }}>CURRENT SENTENCE: {currentIndex + 1}</span>
//             <p style={{ fontSize: "22px", fontWeight: "bold", margin: "10px 0", lineHeight: "1.4" }}>
//               {sentences[language]?.[role]?.[currentIndex] || "Select a language to load script."}
//             </p>
//           </>
//         )}
//       </div>

//       {/* RECORDING CONTROLS */}
//       <button 
//         onClick={isRecording ? () => mediaRecorderRef.current.stop() : startRecording}
//         style={{ 
//           width: "100%", 
//           padding: "20px", 
//           fontSize: "18px", 
//           fontWeight: "bold", 
//           backgroundColor: isRecording ? "#dc3545" : "#212529", 
//           color: "white", 
//           border: "none", 
//           borderRadius: "8px", 
//           cursor: "pointer" 
//         }}
//       >
//         {isRecording ? "STOP RECORDING" : "START RECORDING"}
//       </button>

//       {/* REVIEW AND UPLOAD */}
//       {audioURL && (
//         <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fff" }}>
//           <label style={{ fontSize: "12px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>REVIEW RECORDING:</label>
//           <audio src={audioURL} controls style={{ width: "100%" }} />
          
//           <button 
//             onClick={async () => {
//               const blob = new Blob(chunksRef.current, {type: mediaRecorderRef.current.mimeType});
//               if (await uploadAudio(blob, recordedDuration)) {
//                 setAudioURL(null);
//                 if (!sessionId) setCurrentIndex(prev => prev + 1);
//                 alert("Saved Successfully!");
//               }
//             }}
//             disabled={isUploading}
//             style={{ 
//               width: "100%", 
//               marginTop: "15px", 
//               padding: "15px", 
//               backgroundColor: "#28a745", 
//               color: "white", 
//               border: "none", 
//               borderRadius: "8px", 
//               fontWeight: "bold",
//               cursor: isUploading ? "not-allowed" : "pointer"
//             }}
//           >
//             {isUploading ? "UPLOADING..." : "SAVE & NEXT"}
//           </button>
//         </div>
//       )}

//       {error && (
//         <div style={{ color: "#dc3545", textAlign: "center", fontWeight: "bold", marginTop: "15px", padding: "10px", border: "1px solid #dc3545", borderRadius: "5px" }}>
//           {error}
//         </div>
//       )}
//     </div>
//   );
// }