
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const Demo = () => {
  const [objectFriskFile, setObjectFriskFile] = useState<File | null>(null);
  const [genderDetectionFile, setGenderDetectionFile] = useState<File | null>(null);
  const [signRecognitionFile, setSignRecognitionFile] = useState<File | null>(null);
  
  const [processingObject, setProcessingObject] = useState(false);
  const [processingGender, setProcessingGender] = useState(false);
  const [processingSign, setProcessingSign] = useState(false);
  
  const [objectResult, setObjectResult] = useState<string | null>(null);
  const [genderResult, setGenderResult] = useState<string | null>(null);
  const [signResult, setSignResult] = useState<string | null>(null);

  const handleObjectFriskUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'video/mp4' && file.type !== 'video/webm') {
        toast.error("Please upload a valid video file (MP4 or WebM format)");
        return;
      }
      
      setObjectFriskFile(file);
      setObjectResult(null);
      toast.success("Video uploaded successfully");
    }
  };

  const handleGenderDetectionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        toast.error("Please upload a valid image file");
        return;
      }
      
      setGenderDetectionFile(file);
      setGenderResult(null);
      toast.success("Image uploaded successfully");
    }
  };

  const handleSignRecognitionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        toast.error("Please upload a valid image file");
        return;
      }
      
      setSignRecognitionFile(file);
      setSignResult(null);
      toast.success("Image uploaded successfully");
    }
  };

  const processObjectFrisking = () => {
    if (!objectFriskFile) {
      toast.error("Please upload a video first");
      return;
    }
    
    setProcessingObject(true);
    toast.info("Processing video...");
    
    // Simulate processing
    setTimeout(() => {
      setProcessingObject(false);
      setObjectResult("Detected items: Metallic object at waist level, possibly a mobile phone. No dangerous items found.");
      toast.success("Video processing complete");
    }, 3000);
    
    // In a real application, you would call your backend API here
    // const formData = new FormData();
    // formData.append('video', objectFriskFile);
    // fetch('/api/object-frisking', {
    //   method: 'POST',
    //   body: formData
    // }).then(res => res.json())
    //   .then(data => {
    //     setObjectResult(data.result);
    //     setProcessingObject(false);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     toast.error("Error processing video");
    //     setProcessingObject(false);
    //   });
  };

  const processGenderDetection = () => {
    if (!genderDetectionFile) {
      toast.error("Please upload an image first");
      return;
    }
    
    setProcessingGender(true);
    toast.info("Processing image...");
    
    // Simulate processing
    setTimeout(() => {
      setProcessingGender(false);
      setGenderResult("Detected: Female, Confidence: 94.8%");
      toast.success("Image processing complete");
    }, 2000);
    
    // In a real application, you would call your backend API here
  };

  const processSignRecognition = () => {
    if (!signRecognitionFile) {
      toast.error("Please upload an image first");
      return;
    }
    
    setProcessingSign(true);
    toast.info("Processing image...");
    
    // Simulate processing
    setTimeout(() => {
      setProcessingSign(false);
      setSignResult("Sign detected: Warning/Caution sign. Classification: Safety warning.");
      toast.success("Image processing complete");
    }, 2000);
    
    // In a real application, you would call your backend API here
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold neon-text text-center mb-8">
            Live Demo
          </h1>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience our AI security technologies in action. Upload files to each system and see the results in real-time.
          </p>
          
          <Tabs defaultValue="object-frisking" className="w-full">
            <TabsList className="grid grid-cols-3 mb-10">
              <TabsTrigger value="object-frisking">Object Frisking</TabsTrigger>
              <TabsTrigger value="gender-detection">Gender Detection</TabsTrigger>
              <TabsTrigger value="sign-recognition">Sign Recognition</TabsTrigger>
            </TabsList>
            
            {/* Object Frisking Tab */}
            <TabsContent value="object-frisking" className="focus:outline-none">
              <div className="card">
                <h2 className="text-2xl font-semibold text-white mb-4">Object Frisking Detection</h2>
                <p className="text-gray-300 mb-6">
                  Our AI analyzes video footage to detect hidden objects on a person's body without physical contact.
                  Upload a video of a person walking or standing to detect any objects they might be carrying.
                </p>
                
                <div className="mb-8">
                  <label className="upload-box">
                    <input 
                      type="file" 
                      accept="video/mp4,video/webm" 
                      className="hidden" 
                      onChange={handleObjectFriskUpload} 
                    />
                    <Upload className="h-12 w-12 text-neonBlue mb-3" />
                    <p className="text-lg font-medium text-white">
                      {objectFriskFile ? objectFriskFile.name : "Upload video"}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Supported formats: MP4, WebM
                    </p>
                  </label>
                </div>
                
                {objectFriskFile && (
                  <div className="text-center">
                    <button 
                      className="neon-button"
                      onClick={processObjectFrisking}
                      disabled={processingObject}
                    >
                      {processingObject ? "Processing..." : "Process Video"}
                    </button>
                  </div>
                )}
                
                {objectResult && (
                  <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">Results</h3>
                    <p className="text-gray-300">{objectResult}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Gender Detection Tab */}
            <TabsContent value="gender-detection" className="focus:outline-none">
              <div className="card">
                <h2 className="text-2xl font-semibold text-white mb-4">Gender Detection</h2>
                <p className="text-gray-300 mb-6">
                  Our gender detection system uses AI to identify genders from images.
                  Upload a clear photo of a face for the most accurate results.
                </p>
                
                <div className="mb-8">
                  <label className="upload-box">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleGenderDetectionUpload} 
                    />
                    <Upload className="h-12 w-12 text-neonBlue mb-3" />
                    <p className="text-lg font-medium text-white">
                      {genderDetectionFile ? genderDetectionFile.name : "Upload image"}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Supported formats: JPG, PNG, WebP
                    </p>
                  </label>
                </div>
                
                {genderDetectionFile && (
                  <div className="text-center">
                    <button 
                      className="neon-button"
                      onClick={processGenderDetection}
                      disabled={processingGender}
                    >
                      {processingGender ? "Processing..." : "Process Image"}
                    </button>
                  </div>
                )}
                
                {genderResult && (
                  <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">Results</h3>
                    <p className="text-gray-300">{genderResult}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Sign Recognition Tab */}
            <TabsContent value="sign-recognition" className="focus:outline-none">
              <div className="card">
                <h2 className="text-2xl font-semibold text-white mb-4">Sign Recognition</h2>
                <p className="text-gray-300 mb-6">
                  Our sign recognition technology identifies and interprets various signs and signals from images.
                  Upload a photo containing signs, gestures, or signals for analysis.
                </p>
                
                <div className="mb-8">
                  <label className="upload-box">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleSignRecognitionUpload} 
                    />
                    <Upload className="h-12 w-12 text-neonBlue mb-3" />
                    <p className="text-lg font-medium text-white">
                      {signRecognitionFile ? signRecognitionFile.name : "Upload image"}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Supported formats: JPG, PNG, WebP
                    </p>
                  </label>
                </div>
                
                {signRecognitionFile && (
                  <div className="text-center">
                    <button 
                      className="neon-button"
                      onClick={processSignRecognition}
                      disabled={processingSign}
                    >
                      {processingSign ? "Processing..." : "Process Image"}
                    </button>
                  </div>
                )}
                
                {signResult && (
                  <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">Results</h3>
                    <p className="text-gray-300">{signResult}</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 p-4 bg-gray-900 border border-gray-800 rounded-lg text-center">
            <div className="flex items-center justify-center text-yellow-500 mb-3">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span className="font-semibold">Note</span>
            </div>
            <p className="text-gray-300">
              This is a demonstration version. In a production environment, your uploads would be processed by our advanced AI models on secure servers.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Demo;
