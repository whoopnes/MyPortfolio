"use client"
import logotype from "../images/ecov logotype.png"
import backgroundImage from "../images/background-blob.png"
import { useState, useRef, useEffect } from "react"

function Registration({ setCurrentPage }) {
  const [step, setStep] = useState(1)
  const [registerType, setRegisterType] = useState("individual")

  const [emailVerificationStep, setEmailVerificationStep] = useState(1) 
  const [otp, setOtp] = useState("")
  const [generatedOtp, setGeneratedOtp] = useState(null)
  const [otpCountdown, setOtpCountdown] = useState(0)
  const [emailVerificationError, setEmailVerificationError] = useState("")
  const [isEmailVerifying, setIsEmailVerifying] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [serverError, setServerError] = useState("")
  // const [isCheckingValidation, setIsCheckingValidation] = useState(false)

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    institutionName: "",
    customInstitutionName: "",
    major: "",
    degree: "bachelor",
    customDegree: "",
    graduationYear: new Date().getFullYear().toString(),
    domicile: "",
    registerAs: "individual",
    teamName: "",

    
    member1: {
      fullName: "",
      email: "",
      whatsappNumber: "",
      institutionName: "",
      customInstitutionName: "",
      major: "",
      degree: "bachelor",
      customDegree: "",
      graduationYear: new Date().getFullYear().toString(),
      domicile: "",
    },

    // Member 2 (optional for group)
    member2: {
      fullName: "",
      email: "",
      whatsappNumber: "",
      institutionName: "",
      customInstitutionName: "",
      major: "",
      degree: "bachelor",
      customDegree: "",
      graduationYear: new Date().getFullYear().toString(),
      domicile: "",
    },

    proofFile: null,
  })

  
  const [errors, setErrors] = useState({})
  const [memberErrors, setMemberErrors] = useState({
    member1: {},
    member2: {},
  })

  
  const errorRefs = useRef({})


  const [isSuccess, setIsSuccess] = useState(false)

  // List of sample institutions for the dropdown
  const institutions = [
    "BINUS University",
    "University of Indonesia",
    "Bandung Institute of Technology",
    "Gadjah Mada University",
    "Airlangga University",
    "Diponegoro University",
    "Brawijaya University",
    "Padjadjaran University",
    "Hasanuddin University",
    "Sepuluh Nopember Institute of Technology",
    "Bogor Agricultural University",
    "Telkom University",
    "Petra Christian University",
    "Parahyangan Catholic University",
    "State University of Malang",
    "Sriwijaya University",
    "Andalas University",
    "Udayana University",
    "Sebelas Maret University",
    "Islamic University of Indonesia",
    "Sanata Dharma University",
    "Surabaya University",
    "Atma Jaya Catholic University of Indonesia",
    "State University of Jakarta",
    "Yogyakarta State University",
    "Maranatha Christian University",
    "State University of Surabaya",
    "State University of Semarang",
    "State University of Medan",
    "Lambung Mangkurat University",
    "Other",
  ]

  // Generate years for dropdown (current year to 10 years in the future)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 11 }, (_, i) => (currentYear + i).toString())

  // Dropdown state
  const [showInstitutions, setShowInstitutions] = useState(false)
  const [filteredInstitutions, setFilteredInstitutions] = useState(institutions)
  const [showMember1Institutions, setShowMember1Institutions] = useState(false)
  const [filteredMember1Institutions, setFilteredMember1Institutions] = useState(institutions)
  const [showMember2Institutions, setShowMember2Institutions] = useState(false)
  const [filteredMember2Institutions, setFilteredMember2Institutions] = useState(institutions)

  const [showMember2, setShowMember2] = useState(false)

  const [showCustomInstitution, setShowCustomInstitution] = useState(false)
  const [customInstitution, setCustomInstitution] = useState("")
  const [showMember1CustomInstitution, setShowMember1CustomInstitution] = useState(false)
  const [showMember2CustomInstitution, setShowMember2CustomInstitution] = useState(false)

  useEffect(() => {
    let timer
    if (otpCountdown > 0) {
      timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [otpCountdown])

  // Scroll to first error when validation fails
  useEffect(() => {
    const errorKeys = Object.keys(errors)
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0]
      if (errorRefs.current[firstErrorKey]) {
        errorRefs.current[firstErrorKey].scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }
    }
  }, [errors])

  // Scroll to first member error when validation fails
  useEffect(() => {
    if (Object.keys(memberErrors.member1).length > 0) {
      const firstErrorKey = Object.keys(memberErrors.member1)[0]
      if (errorRefs.current[`member1-${firstErrorKey}`]) {
        errorRefs.current[`member1-${firstErrorKey}`].scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }
    }
  }, [memberErrors])

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }

    
    // if (serverError) {
    //   setServerError("")
    // }

   
    if (name === "registerAs") {
      setRegisterType(value)
    }
  }

 
  const handleMemberChange = (memberNum, e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [memberNum]: {
        ...formData[memberNum],
        [name]: value,
      },
    })

    if (memberErrors[memberNum][name]) {
      setMemberErrors({
        ...memberErrors,
        [memberNum]: {
          ...memberErrors[memberNum],
          [name]: "",
        },
      })
    }

    
  }

  
  const handleInstitutionSearch = (e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      institutionName: value,
    })

    // Filter institutions based on input
    const filtered = institutions.filter((institution) => institution.toLowerCase().includes(value.toLowerCase()))
    setFilteredInstitutions(filtered)
  }

  // Handle member institution search
  const handleMemberInstitutionSearch = (memberNum, e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [memberNum]: {
        ...formData[memberNum],
        institutionName: value,
      },
    })

    // Filter institutions based on input
    const filtered = institutions.filter((institution) => institution.toLowerCase().includes(value.toLowerCase()))

    if (memberNum === "member1") {
      setFilteredMember1Institutions(filtered)
    } else {
      setFilteredMember2Institutions(filtered)
    }
  }

  // Handle custom institution input change
  const handleCustomInstitutionChange = (e) => {
    const value = e.target.value
    setCustomInstitution(value)
    setFormData({
      ...formData,
      customInstitutionName: value,
    })
  }

  // Handle member custom institution change
  const handleMemberCustomInstitutionChange = (memberNum, e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [memberNum]: {
        ...formData[memberNum],
        customInstitutionName: value,
      },
    })
  }

  // Select institution from dropdown
  const selectInstitution = (institution) => {
    setFormData({
      ...formData,
      institutionName: institution,
    })
    setShowInstitutions(false)

    if (institution === "Other") {
      setShowCustomInstitution(true)
      setCustomInstitution("")
    } else {
      setShowCustomInstitution(false)
    }
  }

  // Select member institution from dropdown
  const selectMemberInstitution = (memberNum, institution) => {
    setFormData({
      ...formData,
      [memberNum]: {
        ...formData[memberNum],
        institutionName: institution,
      },
    })

    if (memberNum === "member1") {
      setShowMember1Institutions(false)
      if (institution === "Other") {
        setShowMember1CustomInstitution(true)
      } else {
        setShowMember1CustomInstitution(false)
      }
    } else {
      setShowMember2Institutions(false)
      if (institution === "Other") {
        setShowMember2CustomInstitution(true)
      } else {
        setShowMember2CustomInstitution(false)
      }
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors({
          ...errors,
          proofFile: "File size must be less than 10MB",
        })
      } else if (file.type !== "application/pdf") {
        setErrors({
          ...errors,
          proofFile: "File must be a PDF",
        })
      } else {
        setFormData({
          ...formData,
          proofFile: file,
        })

        // Clear error when user uploads valid file
        if (errors.proofFile) {
          setErrors({
            ...errors,
            proofFile: "",
          })
        }
      }
    }
  }


  
  const sendOtpEmail = async () => {
    setIsEmailVerifying(true)
    setEmailVerificationError("")
    console.log("API URL is:", process.env.REACT_APP_API_URL);
    try {
      // Generate 6-digit OTP
      const otpCode = Math.floor(100000 + Math.random() * 900000)
      setGeneratedOtp(otpCode)

      console.log("Attempting to send OTP to:", formData.email)
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/send-otp`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: otpCode,
        }),
      })

      const result = await response.json()
      console.log("OTP API Response:", result)

      if (!response.ok) {
        throw new Error(result.error || "Failed to send OTP")
      }

      setEmailVerificationStep(2)
      setOtpCountdown(60)
    } catch (err) {
      console.error("OTP send error:", err)
      setEmailVerificationError(`Failed to send OTP: ${err.message}. Please try again.`)
    } finally {
      setIsEmailVerifying(false)
    }
  }


  const verifyOtp = async () => {
    setIsEmailVerifying(true)
    setEmailVerificationError("")

    try {
      if (Number.parseInt(otp) === generatedOtp) {
        console.log("OTP verified successfully, now submitting to database...")

        try {
          const requestData = {
            teamName: formData.teamName,
            leader: {
              fullName: formData.fullName,
              email: formData.email,
              whatsappNumber: formData.whatsappNumber,
              institutionName:
                formData.institutionName === "Other" ? formData.customInstitutionName : formData.institutionName,
              major: formData.major,
              degree: formData.degree === "other" ? formData.customDegree : formData.degree,
              expectedGraduationYear: Number.parseInt(formData.graduationYear),
              domicile: formData.domicile,
            },
            registerAs: formData.registerAs,
            members: [],
          }

          if (formData.registerAs === "group") {
            requestData.members.push({
              fullName: formData.member1.fullName,
              email: formData.member1.email,
              whatsappNumber: formData.member1.whatsappNumber,
              institutionName:
                formData.member1.institutionName === "Other"
                  ? formData.member1.customInstitutionName
                  : formData.member1.institutionName,
              major: formData.member1.major,
              degree: formData.member1.degree === "other" ? formData.member1.customDegree : formData.member1.degree,
              expectedGraduationYear: Number.parseInt(formData.member1.graduationYear),
              domicile: formData.member1.domicile,
            })

            if (showMember2) {
              requestData.members.push({
                fullName: formData.member2.fullName,
                email: formData.member2.email,
                whatsappNumber: formData.member2.whatsappNumber,
                institutionName:
                  formData.member2.institutionName === "Other"
                    ? formData.member2.customInstitutionName
                    : formData.member2.institutionName,
                major: formData.member2.major,
                degree: formData.member2.degree === "other" ? formData.member2.customDegree : formData.member2.degree,
                expectedGraduationYear: Number.parseInt(formData.member2.graduationYear),
                domicile: formData.member2.domicile,
              })
            }
          }

          console.log("Submitting registration data to database...")
          const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestData),
});

const result = await response.json();

if (!response.ok || !result.success) {
  throw new Error(result.error || "Database registration failed");
}

if (formData.proofFile && result.data?.teamId) {
  console.log("📎 Uploading proof file...");
  const fileData = new FormData();
  fileData.append("proofFile", formData.proofFile);
  fileData.append("teamId", result.data.teamId);

  const fileResponse = await fetch(`${process.env.REACT_APP_API_URL}/register/uploads`, {
    method: "POST",
    body: fileData,
  });

  const fileResult = await fileResponse.json();

  if (!fileResponse.ok || !fileResult.success) {
    console.error("File upload failed:", fileResult);
    //rollback
     await fetch(`${process.env.REACT_APP_API_URL}/register/${result.data.teamId}`, {
      method: "DELETE",
    });
    throw new Error("File upload failed, registration cancelled");
  } else {
    console.log("File uploaded successfully");
    requestData.proofDocsLink = fileResult.data.fileUrl;
  }
}


          console.log("Database registration completed successfully")
          // Step 3.5: Send data to Google Sheets
          try {
            console.log('Sending data to Google Sheets...')
            await sendToGoogleSheets(requestData, result.data?.teamId, requestData.proofDocsLink)
            console.log('Data sent to Google Sheets successfully')
          } catch (sheetsError) {
            console.error(' Google Sheets error:', sheetsError)
          }
        } catch (dbError) {
          console.error("Database registration failed:", dbError)
          let errorMessage = dbError.message
          let showBackButton = false

          if (errorMessage.includes("Team name already exists")) {
            errorMessage = "This team name is already taken. Please go back and choose a different team name."
            showBackButton = true
          } else if (errorMessage.includes("Email already registered")) {
            errorMessage = "This email is already registered. Please go back and use a different email address."
            showBackButton = true
          }

          setEmailVerificationError(errorMessage)


          if (showBackButton) {
            setEmailVerificationError(errorMessage + " You can click the back button below to modify your information.")
          }

          return
        }

        // Step 4: Send confirmation email
        try {
          console.log("Sending confirmation email...")
          const confirmationResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/send-confirmation`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              fullName: formData.fullName,
              teamName: formData.teamName,
            }),
          })

          if (confirmationResponse.ok) {
            console.log("Confirmation email sent successfully")
          } else {
            console.error(" Failed to send confirmation email")
          }
        } catch (emailError) {
          console.error("onfirmation email error:", emailError)
         
        }

        // Step 5: Move to success step
        setEmailVerificationStep(3)
        setTimeout(() => {
          setStep(5) // Move to WhatsApp confirmation
        }, 2000)
      } else {
        setEmailVerificationError("Invalid OTP. Please check and try again.")
      }
    } catch (err) {
      console.error("OTP verification error:", err)
      setEmailVerificationError("Verification failed. Please try again.")
    } finally {
      setIsEmailVerifying(false)
    }
  }

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6)
    setOtp(value)
    setEmailVerificationError("")
  }

 const sendToGoogleSheets = async (registrationData, teamId, proofDocsLink = null) => {
  try {

    const jsonData = {
    timestamp: new Date().toISOString(),
    registerAs: registrationData.registerAs,
    teamName: registrationData.teamName,
    leader: registrationData.leader,
    members: registrationData.members || [],
    proofDocsStatus: proofDocsLink ? "Uploaded" : "Pending",
    proofDocsLink: proofDocsLink || "N/A",
  };


    if (registrationData.registerAs === 'individual') {
      jsonData.fullName = registrationData.leader.fullName;
      jsonData.email = registrationData.leader.email;
      jsonData.whatsappNumber = registrationData.leader.whatsappNumber;
      jsonData.institutionName = registrationData.leader.institutionName;
      jsonData.major = registrationData.leader.major;
      jsonData.degree = registrationData.leader.degree;
      jsonData.graduationYear = registrationData.leader.expectedGraduationYear.toString();
      jsonData.domicile = registrationData.leader.domicile;
    } else {
      jsonData.leaderFullName = registrationData.leader.fullName;
      jsonData.leaderEmail = registrationData.leader.email;
      jsonData.leaderWhatsappNumber = registrationData.leader.whatsappNumber;
      jsonData.leaderInstitutionName = registrationData.leader.institutionName;
      jsonData.leaderMajor = registrationData.leader.major;
      jsonData.leaderDegree = registrationData.leader.degree;
      jsonData.leaderGraduationYear = registrationData.leader.expectedGraduationYear.toString();
      jsonData.leaderDomicile = registrationData.leader.domicile;


      if (registrationData.members && registrationData.members[0]) {
        const member1 = registrationData.members[0];
        jsonData.member1FullName = member1.fullName;
        jsonData.member1Email = member1.email;
        jsonData.member1WhatsappNumber = member1.whatsappNumber;
        jsonData.member1InstitutionName = member1.institutionName;
        jsonData.member1Major = member1.major;
        jsonData.member1Degree = member1.degree;
        jsonData.member1GraduationYear = member1.expectedGraduationYear.toString();
        jsonData.member1Domicile = member1.domicile;
      }

      if (registrationData.members && registrationData.members[1]) {
        const member2 = registrationData.members[1];
        jsonData.member2FullName = member2.fullName;
        jsonData.member2Email = member2.email;
        jsonData.member2WhatsappNumber = member2.whatsappNumber;
        jsonData.member2InstitutionName = member2.institutionName;
        jsonData.member2Major = member2.major;
        jsonData.member2Degree = member2.degree;
        jsonData.member2GraduationYear = member2.expectedGraduationYear.toString();
        jsonData.member2Domicile = member2.domicile;
      }
    }

    jsonData.proofDocsStatus = proofDocsLink ? 'Uploaded' : 'Pending';
    jsonData.proofDocsLink = proofDocsLink || 'N/A';

    const GOOGLE_SHEETS_PROXY_URL = "https://api-ecovation.dwdgbinus.com/api/google-sheets-proxy";

    const response = await fetch(GOOGLE_SHEETS_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    });


    const result = await response.json();

    if (result.status !== 'success') {
      throw new Error(result.message || 'Failed to send data to Google Sheets');
    }

    return result;

  } catch (error) {
    console.error("Google Sheets integration error:", error);
    throw error;
  }
};


  const validatePersonalInfo = () => {
    const newErrors = {}

    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team name is required"
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required"
    } else if (!/^08[0-9]{6,13}$/.test(formData.whatsappNumber.replace(/\s/g, ""))) {
      newErrors.whatsappNumber = "WhatsApp number must start with '08' and valid"
    }

    if (!formData.institutionName.trim()) {
      newErrors.institutionName = "Institution name is required"
    }

    if (formData.institutionName === "Other" && !formData.customInstitutionName.trim()) {
      newErrors.customInstitutionName = "Please specify your institution"
    }

    if (!formData.major.trim()) {
      newErrors.major = "Major is required"
    }

    if (formData.degree === "other" && !formData.customDegree.trim()) {
      newErrors.customDegree = "Please specify your degree"
    }

    if (!formData.domicile.trim()) {
      newErrors.domicile = "Domicile is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Validate member info form
  const validateMemberInfo = () => {
    const member1Errors = {}
    const member2Errors = {}
    let isValid = true

    if (!formData.member1.fullName.trim()) {
      member1Errors.fullName = "Full name is required"
      isValid = false
    }

    if (!formData.member1.email.trim()) {
      member1Errors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.member1.email)) {
      member1Errors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.member1.whatsappNumber.trim()) {
      member1Errors.whatsappNumber = "WhatsApp number is required"
      isValid = false
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.member1.whatsappNumber.replace(/\s/g, ""))) {
      member1Errors.whatsappNumber = "WhatsApp number is invalid"
      isValid = false
    }

    if (!formData.member1.institutionName.trim()) {
      member1Errors.institutionName = "Institution name is required"
      isValid = false
    }

    if (formData.member1.institutionName === "Other" && !formData.member1.customInstitutionName.trim()) {
      member1Errors.customInstitutionName = "Please specify the institution"
      isValid = false
    }

    if (!formData.member1.major.trim()) {
      member1Errors.major = "Major is required"
      isValid = false
    }

    if (formData.member1.degree === "other" && !formData.member1.customDegree.trim()) {
      member1Errors.customDegree = "Please specify the degree"
      isValid = false
    }

    if (!formData.member1.domicile.trim()) {
      member1Errors.domicile = "Domicile is required"
      isValid = false
    }

    // Member 2 validation (only if shown)
    if (showMember2) {
      if (!formData.member2.fullName.trim()) {
        member2Errors.fullName = "Full name is required"
        isValid = false
      }

      if (!formData.member2.email.trim()) {
        member2Errors.email = "Email is required"
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(formData.member2.email)) {
        member2Errors.email = "Email is invalid"
        isValid = false
      }

      if (!formData.member2.whatsappNumber.trim()) {
        member2Errors.whatsappNumber = "WhatsApp number is required"
        isValid = false
      } else if (!/^\+?[0-9]{10,15}$/.test(formData.member2.whatsappNumber.replace(/\s/g, ""))) {
        member2Errors.whatsappNumber = "WhatsApp number is invalid"
        isValid = false
      }

      if (!formData.member2.institutionName.trim()) {
        member2Errors.institutionName = "Institution name is required"
        isValid = false
      }

      if (formData.member2.institutionName === "Other" && !formData.member2.customInstitutionName.trim()) {
        member2Errors.customInstitutionName = "Please specify the institution"
        isValid = false
      }

      if (!formData.member2.major.trim()) {
        member2Errors.major = "Major is required"
        isValid = false
      }

      if (formData.member2.degree === "other" && !formData.member2.customDegree.trim()) {
        member2Errors.customDegree = "Please specify the degree"
        isValid = false
      }

      if (!formData.member2.domicile.trim()) {
        member2Errors.domicile = "Domicile is required"
        isValid = false
      }
    }

    setMemberErrors({
      member1: member1Errors,
      member2: member2Errors,
    })

    return isValid
  }

  // Validate proof file
  const validateProofFile = () => {
    console.log("Validating proof file:", formData.proofFile)
    const newErrors = {}

    if (!formData.proofFile) {
      newErrors.proofFile = "Proof document is required"
    }

    setErrors(newErrors)
    const isValid = Object.keys(newErrors).length === 0
    console.log("Proof file validation result:", isValid)
    return isValid
  }

  
  const handleNextStep = () => {
    console.log("Current step:", step)

    if (step === 1) {
      if (validatePersonalInfo()) {
        if (formData.registerAs === "individual") {
          setStep(3) // Skip to proof upload for individuals
        } else {
          setStep(2) 
        }
      }
    } else if (step === 2) {
      if (validateMemberInfo()) {
        setStep(3)
      }
    } else if (step === 3) {
      console.log("Step 3 next button clicked")
      if (validateProofFile()) {
        console.log("Moving to step 4 (email verification)")
        setStep(4) // Go to email verification
      }
    }
  }

  // Handle previous step
  const handlePrevStep = () => {
    // Clear server error when going back
    // setServerError("")

    if (step === 2) {
      setStep(1)
    } else if (step === 3) {
      if (formData.registerAs === "individual") {
        setStep(1)
      } else {
        setStep(2)
      }
    } else if (step === 4) {
      setStep(3)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (step === 3 && validateProofFile()) {
      console.log("Step 3 validation passed, moving to email verification...")
      setStep(4)
    } else {
      handleNextStep()
    }
  }



  const renderEmailVerificationSendOtp = () => (
    <div className="text-center py-10">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
        <svg
          className="h-6 w-6 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
      <p className="text-gray-600 mb-6">We need to verify your email address before you can join the WhatsApp group.</p>
      <p className="text-sm text-gray-500 mb-6">
        Email: <span className="font-medium">{formData.email}</span>
      </p>

      {emailVerificationError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600 text-sm">{emailVerificationError}</p>
        </div>
      )}

      <button
        onClick={sendOtpEmail}
        disabled={isEmailVerifying}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isEmailVerifying ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Verification Code"
        )}
      </button>
    </div>
  )

  const renderEmailVerificationVerifyOtp = () => (
    <div className="text-center py-10">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
        <svg
          className="h-6 w-6 text-yellow-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter Verification Code</h2>
      <p className="text-gray-600 mb-6">We've sent a 6-digit verification code to your email address.</p>
      <p className="text-sm text-gray-500 mb-6">
        Email: <span className="font-medium">{formData.email}</span>
      </p>

      {emailVerificationError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600 text-sm">{emailVerificationError}</p>
          {emailVerificationError.includes("go back") && (
            <button
              onClick={() => {
                setEmailVerificationError("")
                setEmailVerificationStep(1)
                setStep(1) 
              }}
              className="mt-3 inline-flex items-center px-3 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              ← Go Back to Edit Information
            </button>
          )}
        </div>
      )}

      <div className="max-w-xs mx-auto mb-6">
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter 6-digit code"
          className="w-full px-4 py-3 text-center text-2xl font-mono border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          maxLength="6"
        />
      </div>

      <div className="space-y-4">
        <button
          onClick={verifyOtp}
          disabled={isEmailVerifying || otp.length !== 6}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isEmailVerifying ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </button>

        <div className="text-sm text-gray-500">
          Didn't receive the code?{" "}
          {otpCountdown > 0 ? (
            <span>Resend in {otpCountdown}s</span>
          ) : (
            <button
              onClick={sendOtpEmail}
              disabled={isEmailVerifying}
              className="text-emerald-600 hover:text-emerald-500 font-medium"
            >
              Resend Code
            </button>
          )}
          <p className="text-xs text-gray-400 mt-1 italic">
            Note: Please check your spam or junk folder if you don't see the email.
          </p>

        </div>
      </div>
    </div>
  )

  // 🔄 UPDATED: Email verification success with confirmation email mention
  const renderEmailVerificationSuccess = () => (
    <div className="text-center py-10">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
        <svg
          className="h-6 w-6 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Verified Successfully!</h2>
      <p className="text-gray-600 mb-4">Your email has been verified. You can now join our WhatsApp group.</p>

      {/* confirmation email notification */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center mb-2">
          <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-blue-800 font-medium">Check Your Email!</span>
        </div>
        <p className="text-blue-700 text-sm">
          We've sent a welcome email with your registration details and WhatsApp group link to{" "}
          <strong>{formData.email}</strong>
        </p>
      </div>

      <div className="animate-pulse text-emerald-600">Redirecting to WhatsApp group...</div>
    </div>
  )

  const renderEmailVerification = () => {
    if (emailVerificationStep === 1) {
      return renderEmailVerificationSendOtp()
    } else if (emailVerificationStep === 2) {
      return renderEmailVerificationVerifyOtp()
    } else {
      return renderEmailVerificationSuccess()
    }
  }

 
  const renderPersonalInfoForm = () => {
    return (
      <div className="space-y-6">

        <div ref={(el) => (errorRefs.current.teamName = el)}>
          <label htmlFor="teamName" className="block text-gray-700 text-sm font-medium mb-2">
            Team Name
          </label>
          <input
            id="teamName"
            name="teamName"
            type="text"
            value={formData.teamName}
            onChange={handleChange}
            placeholder="Input your team name here..."
            className={`appearance-none block w-full px-3 py-2 border ${errors.teamName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
          />
          {errors.teamName && <p className="mt-1 text-sm text-red-600">{errors.teamName}</p>}
        </div>

        <div ref={(el) => (errorRefs.current.fullName = el)}>
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Input your full name here..."
            className={`appearance-none block w-full px-3 py-2 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
        </div>

        <div ref={(el) => (errorRefs.current.email = el)}>
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Input your email here..."
            className={`appearance-none block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div ref={(el) => (errorRefs.current.whatsappNumber = el)}>
          <label htmlFor="whatsappNumber" className="block text-gray-700 text-sm font-medium mb-2">
            WhatsApp Number
          </label>
          <input
            id="whatsappNumber"
            name="whatsappNumber"
            type="text"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="Input your WhatsApp number here..."
            className={`appearance-none block w-full px-3 py-2 border ${errors.whatsappNumber ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
          />
          {errors.whatsappNumber && <p className="mt-1 text-sm text-red-600">{errors.whatsappNumber}</p>}
        </div>

        <div className="relative" ref={(el) => (errorRefs.current.institutionName = el)}>
          <label htmlFor="institutionName" className="block text-gray-700 text-sm font-medium mb-2">
            Institution Name
          </label>
          <div className="relative">
            <input
              id="institutionName"
              name="institutionName"
              type="text"
              value={formData.institutionName}
              onChange={handleInstitutionSearch}
              onFocus={() => setShowInstitutions(true)}
              placeholder="Search..."
              className={`appearance-none block w-full px-3 py-2 border ${errors.institutionName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 pr-10`}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowInstitutions(!showInstitutions)}
            >
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d={
                    showInstitutions
                      ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  }
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {showInstitutions && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
              {filteredInstitutions.length > 0 ? (
                filteredInstitutions.map((institution, index) => (
                  <div
                    key={index}
                    onClick={() => selectInstitution(institution)}
                    className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-50"
                  >
                    {institution}
                  </div>
                ))
              ) : (
                <div className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-500">
                  No institutions found
                </div>
              )}
            </div>
          )}
          {errors.institutionName && <p className="mt-1 text-sm text-red-600">{errors.institutionName}</p>}
        </div>

        {showCustomInstitution && (
          <div className="mt-2" ref={(el) => (errorRefs.current.customInstitutionName = el)}>
            <input
              type="text"
              placeholder="Enter your institution name"
              value={customInstitution}
              onChange={handleCustomInstitutionChange}
              className={`appearance-none block w-full px-3 py-2 border ${errors.customInstitutionName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
            />
            {errors.customInstitutionName && (
              <p className="mt-1 text-sm text-red-600">{errors.customInstitutionName}</p>
            )}
          </div>
        )}

        <div ref={(el) => (errorRefs.current.major = el)}>
          <label htmlFor="major" className="block text-gray-700 text-sm font-medium mb-2">
            Major
          </label>
          <input
            id="major"
            name="major"
            type="text"
            value={formData.major}
            onChange={handleChange}
            placeholder="Input your major here..."
            className={`appearance-none block w-full px-3 py-2 border ${errors.major ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
          />
          {errors.major && <p className="mt-1 text-sm text-red-600">{errors.major}</p>}
        </div>

        <div>
          <label htmlFor="degree" className="block text-gray-700 text-sm font-medium mb-2">
            Degree
          </label>
          <select
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
            <option value="doctorate">Doctorate</option>
            <option value="other">Other</option>
          </select>

          {formData.degree === "other" && (
            <div className="mt-2" ref={(el) => (errorRefs.current.customDegree = el)}>
              <input
                id="customDegree"
                name="customDegree"
                type="text"
                value={formData.customDegree}
                onChange={handleChange}
                placeholder="Please specify your degree..."
                className={`appearance-none block w-full px-3 py-2 border ${errors.customDegree ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {errors.customDegree && <p className="mt-1 text-sm text-red-600">{errors.customDegree}</p>}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="graduationYear" className="block text-gray-700 text-sm font-medium mb-2">
            Expected Graduation Year
          </label>
          <select
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-gray-500">Year of expected graduation</p>
        </div>

        <div ref={(el) => (errorRefs.current.domicile = el)}>
          <label htmlFor="domicile" className="block text-gray-700 text-sm font-medium mb-2">
            Domicile (City)
          </label>
          <input
            id="domicile"
            name="domicile"
            type="text"
            value={formData.domicile}
            onChange={handleChange}
            placeholder="Input your current domicile..."
            className={`appearance-none block w-full px-3 py-2 border ${errors.domicile ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
          />
          {errors.domicile && <p className="mt-1 text-sm text-red-600">{errors.domicile}</p>}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Register As</label>
          <div className="flex space-x-6">
            <div className="flex items-center">
              <input
                id="individual"
                name="registerAs"
                type="radio"
                value="individual"
                checked={formData.registerAs === "individual"}
                onChange={handleChange}
                className="h-4 w-4 text-emerald-500 focus:ring-green-400 border-gray-300"
              />
              <label htmlFor="individual" className="ml-2 block text-sm text-gray-700">
                Individual
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="group"
                name="registerAs"
                type="radio"
                value="group"
                checked={formData.registerAs === "group"}
                onChange={handleChange}
                className="h-4 w-4 text-emerald-500 focus:ring-green-400 border-gray-300"
              />
              <label htmlFor="group" className="ml-2 block text-sm text-gray-700">
                Group
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Render member info form (Step 2) - keeping your existing code
  const renderMemberInfoForm = () => {
    return (
      <div className="space-y-8">

        {/* Member 1 Section */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Member 1 (Required)</h3>

          <div className="space-y-4">
            <div ref={(el) => (errorRefs.current["member1-fullName"] = el)}>
              <label htmlFor="member1-fullName" className="block text-gray-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="member1-fullName"
                name="fullName"
                type="text"
                value={formData.member1.fullName}
                onChange={(e) => handleMemberChange("member1", e)}
                placeholder="Input member 1 full name here..."
                className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.fullName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {memberErrors.member1.fullName && (
                <p className="mt-1 text-sm text-red-600">{memberErrors.member1.fullName}</p>
              )}
            </div>

            <div ref={(el) => (errorRefs.current["member1-email"] = el)}>
              <label htmlFor="member1-email" className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="member1-email"
                name="email"
                type="email"
                value={formData.member1.email}
                onChange={(e) => handleMemberChange("member1", e)}
                placeholder="Input member 1 email here..."
                className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {memberErrors.member1.email && <p className="mt-1 text-sm text-red-600">{memberErrors.member1.email}</p>}
            </div>

            <div ref={(el) => (errorRefs.current["member1-whatsappNumber"] = el)}>
              <label htmlFor="member1-whatsappNumber" className="block text-gray-700 text-sm font-medium mb-2">
                WhatsApp Number
              </label>
              <input
                id="member1-whatsappNumber"
                name="whatsappNumber"
                type="text"
                value={formData.member1.whatsappNumber}
                onChange={(e) => handleMemberChange("member1", e)}
                placeholder="Input member 1 WhatsApp number here..."
                className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.whatsappNumber ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {memberErrors.member1.whatsappNumber && (
                <p className="mt-1 text-sm text-red-600">{memberErrors.member1.whatsappNumber}</p>
              )}
            </div>

            <div className="relative" ref={(el) => (errorRefs.current["member1-institutionName"] = el)}>
              <label htmlFor="member1-institutionName" className="block text-gray-700 text-sm font-medium mb-2">
                Institution Name
              </label>
              <div className="relative">
                <input
                  id="member1-institutionName"
                  name="institutionName"
                  type="text"
                  value={formData.member1.institutionName}
                  onChange={(e) => handleMemberInstitutionSearch("member1", e)}
                  onFocus={() => setShowMember1Institutions(true)}
                  placeholder="Search..."
                  className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.institutionName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 pr-10`}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowMember1Institutions(!showMember1Institutions)}
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        showMember1Institutions
                          ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      }
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {showMember1Institutions && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
                  {filteredMember1Institutions.length > 0 ? (
                    filteredMember1Institutions.map((institution, index) => (
                      <div
                        key={index}
                        onClick={() => selectMemberInstitution("member1", institution)}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-50"
                      >
                        {institution}
                      </div>
                    ))
                  ) : (
                    <div className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-500">
                      No institutions found
                    </div>
                  )}
                </div>
              )}
              {memberErrors.member1.institutionName && (
                <p className="mt-1 text-sm text-red-600">{memberErrors.member1.institutionName}</p>
              )}
            </div>

            {showMember1CustomInstitution && (
              <div className="mt-2" ref={(el) => (errorRefs.current["member1-customInstitutionName"] = el)}>
                <input
                  type="text"
                  name="customInstitutionName"
                  placeholder="Enter member 1 institution name"
                  value={formData.member1.customInstitutionName}
                  onChange={(e) => handleMemberCustomInstitutionChange("member1", e)}
                  className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.customInstitutionName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                />
                {memberErrors.member1.customInstitutionName && (
                  <p className="mt-1 text-sm text-red-600">{memberErrors.member1.customInstitutionName}</p>
                )}
              </div>
            )}

            <div ref={(el) => (errorRefs.current["member1-major"] = el)}>
              <label htmlFor="member1-major" className="block text-gray-700 text-sm font-medium mb-2">
                Major
              </label>
              <input
                id="member1-major"
                name="major"
                type="text"
                value={formData.member1.major}
                onChange={(e) => handleMemberChange("member1", e)}
                placeholder="Input member 1 major here..."
                className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.major ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {memberErrors.member1.major && <p className="mt-1 text-sm text-red-600">{memberErrors.member1.major}</p>}
            </div>

            <div>
              <label htmlFor="member1-degree" className="block text-gray-700 text-sm font-medium mb-2">
                Degree
              </label>
              <select
                id="member1-degree"
                name="degree"
                value={formData.member1.degree}
                onChange={(e) => handleMemberChange("member1", e)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="doctorate">Doctorate</option>
                <option value="other">Other</option>
              </select>

              {formData.member1.degree === "other" && (
                <div className="mt-2" ref={(el) => (errorRefs.current["member1-customDegree"] = el)}>
                  <input
                    name="customDegree"
                    type="text"
                    value={formData.member1.customDegree}
                    onChange={(e) => handleMemberChange("member1", e)}
                    placeholder="Please specify member 1 degree..."
                    className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.customDegree ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                  />
                  {memberErrors.member1.customDegree && (
                    <p className="mt-1 text-sm text-red-600">{memberErrors.member1.customDegree}</p>
                  )}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="member1-graduationYear" className="block text-gray-700 text-sm font-medium mb-2">
                Expected Graduation Year
              </label>
              <select
                id="member1-graduationYear"
                name="graduationYear"
                value={formData.member1.graduationYear}
                onChange={(e) => handleMemberChange("member1", e)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div ref={(el) => (errorRefs.current["member1-domicile"] = el)}>
              <label htmlFor="member1-domicile" className="block text-gray-700 text-sm font-medium mb-2">
                Domicile (City)
              </label>
              <input
                id="member1-domicile"
                name="domicile"
                type="text"
                value={formData.member1.domicile}
                onChange={(e) => handleMemberChange("member1", e)}
                placeholder="Input member 1 current domicile..."
                className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member1.domicile ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {memberErrors.member1.domicile && (
                <p className="mt-1 text-sm text-red-600">{memberErrors.member1.domicile}</p>
              )}
            </div>
          </div>
        </div>

        {/* Add Member 2 Button */}
        {!showMember2 && (
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowMember2(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Member 2 (Optional)
            </button>
          </div>
        )}

        {/* Member 2 Section */}
        {showMember2 && (
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Member 2 (Optional)</h3>
              <button type="button" onClick={() => setShowMember2(false)} className="text-red-600 hover:text-red-800">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div ref={(el) => (errorRefs.current["member2-fullName"] = el)}>
                <label htmlFor="member2-fullName" className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="member2-fullName"
                  name="fullName"
                  type="text"
                  value={formData.member2.fullName}
                  onChange={(e) => handleMemberChange("member2", e)}
                  placeholder="Input member 2 full name here..."
                  className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.fullName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                />
                {memberErrors.member2.fullName && (
                  <p className="mt-1 text-sm text-red-600">{memberErrors.member2.fullName}</p>
                )}
              </div>

              <div ref={(el) => (errorRefs.current["member2-email"] = el)}>
                <label htmlFor="member2-email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="member2-email"
                  name="email"
                  type="email"
                  value={formData.member2.email}
                  onChange={(e) => handleMemberChange("member2", e)}
                  placeholder="Input member 2 email here..."
                  className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                />
                {memberErrors.member2.email && (
                  <p className="mt-1 text-sm text-red-600">{memberErrors.member2.email}</p>
                )}
              </div>

              <div ref={(el) => (errorRefs.current["member2-whatsappNumber"] = el)}>
                <label htmlFor="member2-whatsappNumber" className="block text-gray-700 text-sm font-medium mb-2">
                  WhatsApp Number
                </label>
                <input
                  id="member2-whatsappNumber"
                  name="whatsappNumber"
                  type="text"
                  value={formData.member2.whatsappNumber}
                  onChange={(e) => handleMemberChange("member2", e)}
                  placeholder="Input member 2 WhatsApp number here..."
                  className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.whatsappNumber ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                />
                {memberErrors.member2.whatsappNumber && (
                  <p className="mt-1 text-sm text-red-600">{memberErrors.member2.whatsappNumber}</p>
                )}
              </div>

              <div className="relative" ref={(el) => (errorRefs.current["member2-institutionName"] = el)}>
                <label htmlFor="member2-institutionName" className="block text-gray-700 text-sm font-medium mb-2">
                  Institution Name
                </label>
                <div className="relative">
                  <input
                    id="member2-institutionName"
                    name="institutionName"
                    type="text"
                    value={formData.member2.institutionName}
                    onChange={(e) => handleMemberInstitutionSearch("member2", e)}
                    onFocus={() => setShowMember2Institutions(true)}
                    placeholder="Search..."
                    className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.institutionName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 pr-10`}
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowMember2Institutions(!showMember2Institutions)}
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d={
                          showMember2Institutions
                            ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        }
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {showMember2Institutions && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
                    {filteredMember2Institutions.length > 0 ? (
                      filteredMember2Institutions.map((institution, index) => (
                        <div
                          key={index}
                          onClick={() => selectMemberInstitution("member2", institution)}
                          className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-50"
                        >
                          {institution}
                        </div>
                      ))
                    ) : (
                      <div className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-500">
                        No institutions found
                      </div>
                    )}
                  </div>
                )}
                {memberErrors.member2.institutionName && (
                  <p className="mt-1 text-sm text-red-600">{memberErrors.member2.institutionName}</p>
                )}
              </div>

              {showMember2CustomInstitution && (
                <div className="mt-2" ref={(el) => (errorRefs.current["member2-customInstitutionName"] = el)}>
                  <input
                    type="text"
                    name="customInstitutionName"
                    placeholder="Enter member 2 institution name"
                    value={formData.member2.customInstitutionName}
                    onChange={(e) => handleMemberCustomInstitutionChange("member2", e)}
                    className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.customInstitutionName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                  />
                  {memberErrors.member2.customInstitutionName && (
                    <p className="mt-1 text-sm text-red-600">{memberErrors.member2.customInstitutionName}</p>
                  )}
                </div>
              )}

              <div ref={(el) => (errorRefs.current["member2-major"] = el)}>
                <label htmlFor="member2-major" className="block text-gray-700 text-sm font-medium mb-2">
                  Major
                </label>
                <input
                  id="member2-major"
                  name="major"
                  type="text"
                  value={formData.member2.major}
                  onChange={(e) => handleMemberChange("member2", e)}
                  placeholder="Input member 2 major here..."
                  className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.major ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                />
                {memberErrors.member2.major && (
                  <p className="mt-1 text-sm text-red-600">{memberErrors.member2.major}</p>
                )}
              </div>

              <div>
                <label htmlFor="member2-degree" className="block text-gray-700 text-sm font-medium mb-2">
                  Degree
                </label>
                <select
                  id="member2-degree"
                  name="degree"
                  value={formData.member2.degree}
                  onChange={(e) => handleMemberChange("member2", e)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </select>

                {formData.member2.degree === "other" && (
                  <div className="mt-2" ref={(el) => (errorRefs.current["member2-customDegree"] = el)}>
                    <input
                      name="customDegree"
                      type="text"
                      value={formData.member2.customDegree}
                      onChange={(e) => handleMemberChange("member2", e)}
                      placeholder="Please specify member 2 degree..."
                      className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.customDegree ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                    />
                    {memberErrors.member2.customDegree && (
                      <p className="mt-1 text-sm text-red-600">{memberErrors.member2.customDegree}</p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="member2-graduationYear" className="block text-gray-700 text-sm font-medium mb-2">
                  Expected Graduation Year
                </label>
                <select
                  id="member2-graduationYear"
                  name="graduationYear"
                  value={formData.member2.graduationYear}
                  onChange={(e) => handleMemberChange("member2", e)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div ref={(el) => (errorRefs.current["member2-domicile"] = el)}>
                <label htmlFor="member2-domicile" className="block text-gray-700 text-sm font-medium mb-2">
                  Domicile (City)
                </label>
                <input
                  id="member2-domicile"
                  name="domicile"
                  type="text"
                  value={formData.member2.domicile}
                  onChange={(e) => handleMemberChange("member2", e)}
                  placeholder="Input member 2 current domicile..."
                  className={`appearance-none block w-full px-3 py-2 border ${memberErrors.member2.domicile ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                />
                {memberErrors.member2.domicile && (
                  <p className="mt-1 text-sm text-red-600">{memberErrors.member2.domicile}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Render proof upload form (Step 3) - keeping your original styling
  const renderProofUploadForm = () => {
    return (
      <div className="space-y-6">
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Data</h3>

          <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center mb-4">
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-gray-700 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-lg font-medium">Proof Docs</span>
            </div>

            <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 cursor-pointer">
              Choose File
              <input type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
            </label>
          </div>

          {formData.proofFile && (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4">
              Selected file: {formData.proofFile.name}
            </div>
          )}

          {errors.proofFile && (
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md mb-4">{errors.proofFile}</div>
          )}

          <div className="text-gray-600 space-y-2">
            <p className="text-sm italic">* Proof docs (PDF, max 10MB):</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Student ID Card</li>
              <li>Upload Twibbon on Instagram Feed and tag @dwdg_binus</li>
              <li>
                Upload EcoVation Post (https://ecovation.dwdgbinus.com/ig-post) on Instagram Story and tag @dwdg_binus
              </li>
              <li>
                Upload Proof of Follow @dwdg_binus on Instagram and Do Well Do Good Future Leaders - BINUS Chapter on
                LinkedIn
              </li>
            </ol>
            <p className="text-sm mt-2">-&gt; Merge all proof docs into 1 PDF file</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href="https://drive.google.com/drive/u/0/folders/1h6PlSsctbXiuEBiFK48IGuedZVnc2VR7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600"
            >
              Twibbon
            </a>
            <a
              href="https://www.instagram.com/p/DKhkWaNzWjr/?igsh=NWgwcWdyc2x5YmNn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600"
            >
              EcoVation Post
            </a>
            <a
              href="https://www.instagram.com/dwdg_binus/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/dwdg-binus/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    )
  }

  const renderConfirmation = () => {
    return (
      <div className="text-center py-10">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg
            className="h-6 w-6 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
        <p className="text-gray-600 mb-4">
          Thank you for registering for EcoVation! Your registration has been completed successfully.
        </p>

        {/* 🆕 ADD: Email confirmation notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-blue-800 font-medium">Check Your Email!</span>
          </div>
          <p className="text-blue-700 text-sm">
            We've sent a confirmation email with all your registration details and the WhatsApp group link to{" "}
            <strong>{formData.email}</strong>
          </p>
        </div>

        {/* WhatsApp Group Link Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Join Our WhatsApp Group</h3>
          <p className="text-gray-600 mb-4">
            Stay updated with the latest information and connect with other participants by joining our WhatsApp group.
          </p>
          <a
            href="https://chat.whatsapp.com/FpBXQJNuZae5ta1WlppCD6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Join WhatsApp Group
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-gotham bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
            REGISTRATION FORM
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 1
              ? "Please fill in your personal information"
              : step === 2
                ? "Please fill in your team members information"
                : step === 3
                  ? "Please upload your proof documents"
                  : step === 4
                    ? "Please verify your email address"
                    : "Registration completed!"}
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <img src={logotype || "/placeholder.svg"} alt="EcoVation Logo" className="h-12 mx-auto mb-6" />

          {/* MODIFIED: Progress bar now includes email verification step */}
          {step < 5 && (
            <div className="mb-8">
              <div className="relative">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${(step / 4) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className={`text-xs font-semibold ${step >= 1 ? "text-emerald-600" : "text-gray-400"}`}>
                    Personal Info
                  </div>
                  {formData.registerAs === "group" && (
                    <div className={`text-xs font-semibold ${step >= 2 ? "text-emerald-600" : "text-gray-400"}`}>
                      Team Members
                    </div>
                  )}
                  <div className={`text-xs font-semibold ${step >= 3 ? "text-emerald-600" : "text-gray-400"}`}>
                    Proof Documents
                  </div>
                  <div className={`text-xs font-semibold ${step >= 4 ? "text-emerald-600" : "text-gray-400"}`}>
                    Email Verification
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && renderPersonalInfoForm()}
            {step === 2 && renderMemberInfoForm()}
            {step === 3 && renderProofUploadForm()}
            {step === 4 && renderEmailVerification()}
            {step === 5 && renderConfirmation()}

            {step < 4 && (
              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : step === 3 ? (
                    "Submit"
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            )}

            {/* ADD: Back button for email verification step */}
            {step === 4 && emailVerificationStep === 1 && (
              <div className="mt-8 flex justify-start">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Back
                </button>
              </div>
            )}

            {step === 5 && <div className="mt-6"></div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
