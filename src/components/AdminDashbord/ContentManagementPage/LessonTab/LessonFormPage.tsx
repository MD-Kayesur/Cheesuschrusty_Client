import React, { useState, useEffect } from 'react';
import { Lesson, Difficulty, Category } from './types';

interface LessonFormPageProps {
  isEditMode?: boolean;
  initialData?: Lesson;
  onSave: (formData: Partial<Lesson>, isEditMode: boolean) => void;
  onCancel: () => void;
}

const LessonFormPage: React.FC<LessonFormPageProps> = ({ isEditMode = false, initialData, onSave, onCancel }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [difficulty, setDifficulty] = useState<Difficulty>(initialData?.difficulty || 'Beginner');
  const [category, setCategory] = useState<Category>(initialData?.category || 'Reading');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setDifficulty(initialData.difficulty);
      setCategory(initialData.category);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, description, difficulty, category }, isEditMode);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{isEditMode ? 'Edit Lesson' : 'Create Lesson'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option>Reading</option>
            <option>Writing</option>
            <option>Listening</option>
            <option>Speaking</option>
            <option>Grammar</option>
            <option>Vocabulary</option>
          </select>
        </div>

        <div className="flex space-x-3 pt-2">
          <button type="submit" className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            {isEditMode ? 'Save Changes' : 'Create Lesson'}
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-300 cursor-pointer text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LessonFormPage;












// // LessonFormPage.tsx
// import React, { useState, useEffect } from 'react';
// import { ContentItem } from '../types';

// interface LessonFormPageProps {
//   isEditMode?: boolean;
//   initialData?: ContentItem;
//   onSave: (formData: Partial<ContentItem>, isEditMode: boolean) => void;
//   onCancel: () => void;
// }

// const LessonFormPage: React.FC<LessonFormPageProps> = ({
//   isEditMode = false,
//   initialData,
//   onSave,
//   onCancel,
  
// }) => {
//   const [title, setTitle] = useState(initialData?.title || '');
//   const [description, setDescription] = useState(initialData?.description || '');
//   const [difficulty, setDifficulty] = useState<ContentItem['difficulty']>(
//     initialData?.difficulty || 'Beginner'
//   );
//   const [category, setCategory] = useState<ContentItem['category']>(
//     initialData?.category || 'Reading'
//   );

//   useEffect(() => {
//     if (initialData) {
//       setTitle(initialData.title);
//       setDescription(initialData.description);
//       setDifficulty(initialData.difficulty);
//       setCategory(initialData.category);
//     }
//   }, [initialData]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave({ title, description, difficulty, category }, isEditMode);
//   };

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 max-w-2xl mx-auto">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         {isEditMode ? 'Edit Lesson' : 'Create Lesson'}
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Title */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg p-2"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg p-2"
//             rows={3}
//           />
//         </div>

//         {/* Difficulty */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
//           <select
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value as ContentItem['difficulty'])}
//             className="w-full border border-gray-300 rounded-lg p-2"
//           >
//             <option>Beginner</option>
//             <option>Intermediate</option>
//             <option>Advance</option>
//           </select>
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value as ContentItem['category'])}
//             className="w-full border border-gray-300 rounded-lg p-2"
//           >
//             <option>Reading</option>
//             <option>Writing</option>
//             <option>Listening</option>
//             <option>Speaking</option>
//           </select>
//         </div>

//         {/* Buttons */}
//         <div className="flex space-x-3 pt-2">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             {isEditMode ? 'Save Changes' : 'Create Lesson'}
//           </button>
//           <button
//             type="button"
//             onClick={onCancel}
//             className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LessonFormPage;













// import React, { useState } from 'react';
// import toast from 'react-hot-toast';

// // Define the content structure for a Lesson Section
// interface LessonSection {
//     id: string;
//     type: 'Vocabulary' | 'Grammar' | 'Exercise' | 'Media';
//     title: string;
//     content: string;
//     audioFile?: File | null;
//     imageFile?: File | null;
// }

// // Define the props for the Lesson Form Page
// interface LessonFormPageProps {
//     isEditMode?: boolean; // To change the title and button text
// }

// const DURATION_OPTIONS = ['15 min', '30 min', '45 min', '1 hour'];
// const DIFFICULTY_OPTIONS = ['Beginner', 'Intermediate', 'Advance'];
// const CATEGORY_OPTIONS = ['Reading', 'Writing', 'Listening', 'Speaking'];

// const LessonFormPage: React.FC<LessonFormPageProps> = ({ isEditMode = false }) => {
//     // State for managing the multiple content sections
//     const [sections, setSections] = useState<LessonSection[]>([
//         { id: '1', type: 'Vocabulary', title: '', content: '' } // Start with one Vocabulary section
//     ]);

//     // State for the main lesson details form
//     const [lessonDetails, setLessonDetails] = useState({
//         title: '',
//         difficulty: '',
//         category: '',
//         duration: '',
//         description: '',
//         access: 'Free for all users', // Default radio selection
//     });

//     const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//         const { id, value } = e.target;
//         setLessonDetails(prev => ({ ...prev, [id]: value }));
//     };

//     const handleAddSection = (type: LessonSection['type']) => {
//         const newSection: LessonSection = {
//             id: Date.now().toString(),
//             type,
//             title: '',
//             content: '',
//         };
//         setSections(prev => [...prev, newSection]);
//         toast.success(`${type} section added.`);
//     };

//     const handleDeleteSection = (id: string) => {
//         setSections(prev => prev.filter(section => section.id !== id));
//     };

//     const handleSectionChange = (id: string, field: keyof LessonSection, value: any) => {
//         setSections(prev =>
//             prev.map(section => (section.id === id ? { ...section, [field]: value } : section))
//         );
//     };

//     const handleSave = () => {
//         // Basic validation
//         if (!lessonDetails.title || !lessonDetails.difficulty || !lessonDetails.description) {
//             toast.error('Please fill in Lesson Title, Difficulty, and Description.');
//             return;
//         }
//         // In a real application, you would send lessonDetails and sections data to an API here.
//         toast.success(`${isEditMode ? 'Lesson Updated' : 'Lesson Created'} Successfully!`);
//         console.log("Saving Lesson:", { lessonDetails, sections });
//     };

//     // Helper component to render the appropriate SVG icon for a section tab
//     const getIcon = (type: LessonSection['type']) => {
//         switch (type) {
//             case 'Vocabulary': return (<svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.464 9.492 5 8 5c-3.314 0-6 2.5-6 5.5s2.686 5.5 6 5.5c1.492 0 2.832-.464 4-1.253m0-13C13.168 5.464 14.508 5 16 5c3.314 0 6 2.5 6 5.5s-2.686 5.5-6 5.5c-1.492 0-2.832-.464-4-1.253"></path></svg>);
//             case 'Grammar': return (<svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>);
//             case 'Exercise': return (<svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>);
//             case 'Media': return (<svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>);
//             default: return null;
//         }
//     };

//     return (
//         <div className="p-8 bg-white min-h-screen">
//             {/* Header and Save Button */}
//             <div className="flex justify-between items-start mb-8">
//                 <div>
//                     <h1 className="text-3xl font-bold text-gray-900">
//                         {isEditMode ? 'Edit Lesson' : 'Create New Lesson'}
//                     </h1>
//                     <p className="text-gray-600 mt-1">
//                         {isEditMode ? 'Update this engaging Italian lesson.' : 'Build engaging Italian lessons for your students.'}
//                     </p>
//                 </div>
//                 <button
//                     onClick={handleSave}
//                     className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
//                 >
//                     Save Lesson
//                 </button>
//             </div>

//             {/* --- Lesson Details Section --- */}
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Lesson Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {/* Lesson Title */}
//                 <div className="flex flex-col">
//                     <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">Lesson Title</label>
//                     <input
//                         id="title"
//                         type="text"
//                         placeholder="Enter deck title"
//                         value={lessonDetails.title}
//                         onChange={handleDetailChange}
//                         className="rounded border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                 </div>

//                 {/* Difficulty Level */}
//                 <div className="flex flex-col">
//                     <label htmlFor="difficulty" className="text-sm font-medium text-gray-700 mb-1">Difficulty Level</label>
//                     <select
//                         id="difficulty"
//                         value={lessonDetails.difficulty}
//                         onChange={handleDetailChange}
//                         className="rounded border border-gray-300 p-3 bg-white focus:ring-blue-500 focus:border-blue-500"
//                     >
//                         <option value="">Select</option>
//                         {DIFFICULTY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                     </select>
//                 </div>

//                 {/* Category */}
//                 <div className="flex flex-col">
//                     <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">Category</label>
//                     <select
//                         id="category"
//                         value={lessonDetails.category}
//                         onChange={handleDetailChange}
//                         className="rounded border border-gray-300 p-3 bg-white focus:ring-blue-500 focus:border-blue-500"
//                     >
//                         <option value="">Select</option>
//                         {CATEGORY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                     </select>
//                 </div>

//                 {/* Estimated Duration */}
//                 <div className="flex flex-col">
//                     <label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-1">Estimated Duration</label>
//                     <select
//                         id="duration"
//                         value={lessonDetails.duration}
//                         onChange={handleDetailChange}
//                         className="rounded border border-gray-300 p-3 bg-white focus:ring-blue-500 focus:border-blue-500"
//                     >
//                         <option value="">Select duration</option>
//                         {DURATION_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                     </select>
//                 </div>
//             </div>

//             {/* Lesson Description (Full Width) */}
//             <div className="flex flex-col mb-10">
//                 <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-1">Lesson Description</label>
//                 <textarea
//                     id="description"
//                     placeholder="Describe what student will learn in this lesson"
//                     value={lessonDetails.description}
//                     onChange={handleDetailChange}
//                     rows={3}
//                     className="rounded border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500"
//                 />
//             </div>

//             {/* --- Lesson Content Section --- */}
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Lesson Content</h2>

//             {/* Content Tabs for Adding New Sections */}
//             <div className="flex space-x-3 mb-6">
//                 {['Vocabulary', 'Grammar', 'Exercise', 'Media'].map((type) => (
//                     <button
//                         key={type}
//                         onClick={() => handleAddSection(type as LessonSection['type'])}
//                         className="flex items-center px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm"
//                     >
//                         {getIcon(type as LessonSection['type'])}
//                         Add {type}
//                     </button>
//                 ))}
//             </div>

//             {/* Dynamic Content Sections */}
//             <div className="space-y-6">
//                 {sections.map(section => (
//                     <div key={section.id} className="p-5 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
//                         <div className="flex justify-between items-center mb-4">
//                             <span className="text-md font-medium text-blue-600 flex items-center">
//                                 {getIcon(section.type)}
//                                 {section.type}
//                             </span>
//                             {sections.length > 1 && (
//                                 <button
//                                     onClick={() => handleDeleteSection(section.id)}
//                                     title="Delete Section"
//                                     className="text-gray-400 hover:text-red-500 transition-colors"
//                                 >
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
//                                 </button>
//                             )}
//                         </div>

//                         <div className="grid grid-cols-1 gap-4">
//                             {/* Section Title */}
//                             <div className="flex flex-col">
//                                 <label htmlFor={`section-title-${section.id}`} className="text-sm font-medium text-gray-700 mb-1">Section Title</label>
//                                 <input
//                                     id={`section-title-${section.id}`}
//                                     type="text"
//                                     placeholder="Enter section title..."
//                                     value={section.title}
//                                     onChange={(e) => handleSectionChange(section.id, 'title', e.target.value)}
//                                     className="rounded border border-gray-300 p-3"
//                                 />
//                             </div>

//                             {/* Content Textarea */}
//                             <div className="flex flex-col">
//                                 <label htmlFor={`section-content-${section.id}`} className="text-sm font-medium text-gray-700 mb-1">Content</label>
//                                 <textarea
//                                     id={`section-content-${section.id}`}
//                                     placeholder="Enter Italian words with translations..."
//                                     value={section.content}
//                                     onChange={(e) => handleSectionChange(section.id, 'content', e.target.value)}
//                                     rows={4}
//                                     className="rounded border border-gray-300 p-3"
//                                 />
//                             </div>

//                             {/* File Uploads (Simplified for this mock) */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 <label className="flex flex-col">
//                                     <span className="text-sm font-medium text-gray-700 mb-1">Audio File</span>
//                                     <input
//                                         type="file"
//                                         accept="audio/*"
//                                         onChange={(e) => handleSectionChange(section.id, 'audioFile', e.target.files ? e.target.files[0] : null)}
//                                         className="hidden"
//                                     />
//                                     <div className="px-4 py-2 border border-dashed border-gray-400 rounded-lg text-center text-sm text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
//                                         Upload Audio
//                                     </div>
//                                 </label>
//                                 <label className="flex flex-col">
//                                     <span className="text-sm font-medium text-gray-700 mb-1">Image File</span>
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={(e) => handleSectionChange(section.id, 'imageFile', e.target.files ? e.target.files[0] : null)}
//                                         className="hidden"
//                                     />
//                                     <div className="px-4 py-2 border border-dashed border-gray-400 rounded-lg text-center text-sm text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
//                                         Upload Image
//                                     </div>
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* --- Lesson Access Section --- */}
//             <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-4 pb-2 border-b">Lesson Access</h2>
//             <div className="space-y-3">
//                 <label className="flex items-center space-x-3 text-gray-700">
//                     <input
//                         type="radio"
//                         name="access"
//                         value="Free for all users"
//                         checked={lessonDetails.access === 'Free for all users'}
//                         onChange={handleDetailChange}
//                         className="form-radio text-blue-600 h-5 w-5"
//                     />
//                     <span>Free for all users</span>
//                 </label>
//                 <label className="flex items-center space-x-3 text-gray-700">
//                     <input
//                         type="radio"
//                         name="access"
//                         value="Premium users only"
//                         checked={lessonDetails.access === 'Premium users only'}
//                         onChange={handleDetailChange}
//                         className="form-radio text-blue-600 h-5 w-5"
//                     />
//                     <span>Premium users only</span>
//                 </label>
//             </div>
            
//              {/* Sticky Save Button at the bottom (Optional, but useful for long forms) */}
//             <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg flex justify-end">
//                 <button
//                     onClick={handleSave}
//                     className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
//                 >
//                     {isEditMode ? 'Update Lesson' : 'Save Lesson'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default LessonFormPage;