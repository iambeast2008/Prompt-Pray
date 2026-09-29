export const categories = [
  { id: 'food', name: 'Food & Baking', icon: '🍰', color: 'bg-orange-badge text-orange-badge-text' },
  { id: 'repairs', name: 'Repairs', icon: '🔧', color: 'bg-green-badge text-green-badge-text' },
  { id: 'tutoring', name: 'Tutoring', icon: '📚', color: 'bg-blue-100 text-blue-800' },
  { id: 'bicycle', name: 'Bicycle Repair', icon: '🚲', color: 'bg-green-badge text-green-badge-text' },
  { id: 'beauty', name: 'Beauty', icon: '💇', color: 'bg-pink-100 text-pink-800' },
  { id: 'fitness', name: 'Fitness', icon: '🧘', color: 'bg-purple-100 text-purple-800' },
  { id: 'tailoring', name: 'Tailoring', icon: '🧵', color: 'bg-orange-badge text-orange-badge-text' },
  { id: 'home', name: 'Home Services', icon: '🏠', color: 'bg-green-badge text-green-badge-text' },
];

export const neighborhoods = [
  'Sector 14',
  'Sector 15',
  'Model Town',
  'Urban Estate',
  'Sector 22',
  'Civil Lines',
];

export const providers = [
  {
    id: 1,
    name: 'Anita Sharma',
    businessName: "Anita's Home Bakery",
    category: 'food',
    description: "I'm Anita, a home baker specializing in fresh cakes, cupcakes, brownies, and custom dessert boxes. Everything is prepared from my home kitchen using fresh ingredients. I've been baking for over 8 years and love creating beautiful, delicious treats for every occasion.",
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31239f97?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=1200&h=400&fit=crop',
    neighborhood: 'Sector 14',
    rating: 4.9,
    reviewCount: 126,
    startingPrice: 450,
    verified: true,
    responseTime: 'Responds within 1 hour',
    memberSince: 'March 2023',
    availability: {
      monday: '9:00 AM – 7:00 PM',
      tuesday: '9:00 AM – 7:00 PM',
      wednesday: '9:00 AM – 7:00 PM',
      thursday: '9:00 AM – 7:00 PM',
      friday: '9:00 AM – 7:00 PM',
      saturday: '10:00 AM – 6:00 PM',
      sunday: 'Closed',
    },
    availableToday: true,
    services: [
      { id: 's1', name: 'Custom Celebration Cake', price: 850, description: 'Customized cakes for birthdays, anniversaries, and special events. Choose your flavor, design, and size.' },
      { id: 's2', name: 'Cupcake Box (12 pcs)', price: 450, description: 'A box of 12 freshly baked cupcakes with custom flavors and toppings.' },
      { id: 's3', name: 'Brownie Box (8 pcs)', price: 350, description: 'Rich, fudgy brownies made with premium chocolate. Perfect for gifting.' },
      { id: 's4', name: 'Dessert Gift Box', price: 600, description: 'An assorted box of cookies, brownies, and mini treats. Great for festivals and corporate gifts.' },
    ],
    reviews: [
      { id: 'r1', author: 'Neha R.', rating: 5, text: 'The cake was beautiful and tasted amazing. Anita was very helpful with the customization. Will definitely order again!', date: '2 weeks ago' },
      { id: 'r2', author: 'Rohan K.', rating: 5, text: 'Ordered brownies for a family event. Fresh, delicious, and delivered on time. Highly recommend!', date: '1 month ago' },
      { id: 'r3', author: 'Simran P.', rating: 5, text: "Best home-baked cupcakes I've ever had. The red velvet ones are to die for.", date: '1 month ago' },
      { id: 'r4', author: 'Amit J.', rating: 4, text: 'Great quality and reasonable prices. The dessert box was perfect for Diwali gifting.', date: '2 months ago' },
      { id: 'r5', author: 'Kavita S.', rating: 5, text: "Anita's cakes are consistently excellent. She's our go-to baker for all celebrations.", date: '3 months ago' },
    ],
  },
  {
    id: 2,
    name: 'Rahul Verma',
    businessName: "Rahul's Bicycle Repair",
    category: 'bicycle',
    description: "Professional bicycle mechanic with 10+ years of experience. I service all types of bicycles including road bikes, mountain bikes, and kids' bikes. Quick turnaround and fair pricing.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&h=400&fit=crop',
    neighborhood: 'Model Town',
    rating: 4.8,
    reviewCount: 89,
    startingPrice: 150,
    verified: true,
    responseTime: 'Responds within 2 hours',
    memberSince: 'January 2023',
    availability: {
      monday: '8:00 AM – 6:00 PM',
      tuesday: '8:00 AM – 6:00 PM',
      wednesday: '8:00 AM – 6:00 PM',
      thursday: '8:00 AM – 6:00 PM',
      friday: '8:00 AM – 6:00 PM',
      saturday: '9:00 AM – 5:00 PM',
      sunday: '10:00 AM – 2:00 PM',
    },
    availableToday: true,
    services: [
      { id: 's5', name: 'Basic Tune-Up', price: 150, description: 'Brake adjustment, gear tuning, tire inflation, and chain lubrication.' },
      { id: 's6', name: 'Full Service', price: 400, description: 'Complete overhaul including wheel truing, bearing check, cable replacement, and cleaning.' },
      { id: 's7', name: 'Puncture Repair', price: 80, description: 'Quick puncture repair with quality patches. Tube replacement available.' },
      { id: 's8', name: 'Brake Replacement', price: 250, description: 'New brake pads and cable installation for safe stopping.' },
    ],
    reviews: [
      { id: 'r6', author: 'Vikram S.', rating: 5, text: 'Rahul fixed my gear issue in under an hour. Very knowledgeable and honest pricing.', date: '1 week ago' },
      { id: 'r7', author: 'Deepak M.', rating: 5, text: 'Best bicycle mechanic in the area. My mountain bike runs like new after the full service.', date: '3 weeks ago' },
      { id: 'r8', author: 'Priti A.', rating: 4, text: "Quick puncture fix for my daughter's cycle. Rahul was very patient and professional.", date: '1 month ago' },
      { id: 'r9', author: 'Suresh N.', rating: 5, text: 'Reliable, affordable, and does quality work. Recommended to all my friends.', date: '2 months ago' },
    ],
  },
  {
    id: 3,
    name: 'Priya Mehta',
    businessName: "Priya's Tutoring",
    category: 'tutoring',
    description: "Experienced tutor specializing in Mathematics and Science for classes 6–12. I use interactive teaching methods and provide personalized attention to help students build strong fundamentals and confidence.",
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=400&fit=crop',
    neighborhood: 'Sector 15',
    rating: 5.0,
    reviewCount: 74,
    startingPrice: 300,
    verified: true,
    responseTime: 'Responds within 30 minutes',
    memberSince: 'June 2022',
    availability: {
      monday: '3:00 PM – 8:00 PM',
      tuesday: '3:00 PM – 8:00 PM',
      wednesday: '3:00 PM – 8:00 PM',
      thursday: '3:00 PM – 8:00 PM',
      friday: '3:00 PM – 8:00 PM',
      saturday: '10:00 AM – 6:00 PM',
      sunday: '10:00 AM – 2:00 PM',
    },
    availableToday: true,
    services: [
      { id: 's9', name: 'Mathematics (per hour)', price: 300, description: 'One-on-one math tutoring for CBSE/ICSE students. Covers algebra, geometry, calculus, and more.' },
      { id: 's10', name: 'Science (per hour)', price: 300, description: 'Physics and Chemistry tutoring with practical problem-solving approach.' },
      { id: 's11', name: 'Exam Preparation Package', price: 2500, description: '10-session intensive package for board exam preparation with practice tests.' },
      { id: 's12', name: 'Monthly Subscription', price: 4000, description: 'Regular tutoring, 3 sessions per week, with progress tracking and parent updates.' },
    ],
    reviews: [
      { id: 'r10', author: 'Meena D.', rating: 5, text: "Priya ma'am is an excellent teacher. My son's math scores improved from 65 to 92 in just 3 months.", date: '2 weeks ago' },
      { id: 'r11', author: 'Rajesh T.', rating: 5, text: 'Very patient and thorough. She makes complex concepts easy to understand.', date: '1 month ago' },
      { id: 'r12', author: 'Sunita K.', rating: 5, text: 'Best tutor in the area. Both my children study with her and have shown remarkable improvement.', date: '2 months ago' },
    ],
  },
  {
    id: 4,
    name: 'Arjun Kumar',
    businessName: 'Arjun Home Repairs',
    category: 'repairs',
    description: "Skilled handyman offering plumbing, basic electrical work, carpentry, and general home repairs. I believe in honest work and fair pricing. No job is too small!",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=400&fit=crop',
    neighborhood: 'Urban Estate',
    rating: 4.7,
    reviewCount: 102,
    startingPrice: 250,
    verified: true,
    responseTime: 'Responds within 1 hour',
    memberSince: 'February 2023',
    availability: {
      monday: '8:00 AM – 7:00 PM',
      tuesday: '8:00 AM – 7:00 PM',
      wednesday: '8:00 AM – 7:00 PM',
      thursday: '8:00 AM – 7:00 PM',
      friday: '8:00 AM – 7:00 PM',
      saturday: '9:00 AM – 5:00 PM',
      sunday: 'Closed',
    },
    availableToday: true,
    services: [
      { id: 's13', name: 'Plumbing Repair', price: 250, description: 'Leaky faucets, pipe repairs, drain cleaning, and toilet fixes.' },
      { id: 's14', name: 'Electrical Work', price: 300, description: 'Switch/socket installation, fan fitting, light fixtures, and minor wiring.' },
      { id: 's15', name: 'Carpentry', price: 350, description: 'Door/window repair, furniture fixing, shelf installation, and wood work.' },
      { id: 's16', name: 'General Maintenance', price: 200, description: 'Wall mounting, curtain rod installation, painting touch-ups, and more.' },
    ],
    reviews: [
      { id: 'r13', author: 'Pooja G.', rating: 5, text: 'Arjun fixed our kitchen sink leak quickly and charged very reasonably. Very professional.', date: '1 week ago' },
      { id: 'r14', author: 'Manish B.', rating: 4, text: 'Good work on the electrical switches. Came on time and cleaned up after the job.', date: '3 weeks ago' },
      { id: 'r15', author: 'Rekha S.', rating: 5, text: 'Reliable and trustworthy. He installed shelves and a curtain rod perfectly.', date: '1 month ago' },
      { id: 'r16', author: 'Sanjay P.', rating: 5, text: 'Called him for an emergency pipe burst. He came within 30 minutes. Life saver!', date: '2 months ago' },
    ],
  },
  {
    id: 5,
    name: 'Sneha Kapoor',
    businessName: "Sneha's Beauty Studio",
    category: 'beauty',
    description: "Professional beautician with expertise in bridal makeup, skincare, hair styling, and beauty treatments. I use premium products and offer services from my home studio for a personalized experience.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=400&fit=crop',
    neighborhood: 'Sector 22',
    rating: 4.9,
    reviewCount: 95,
    startingPrice: 500,
    verified: true,
    responseTime: 'Responds within 2 hours',
    memberSince: 'May 2023',
    availability: {
      monday: '10:00 AM – 7:00 PM',
      tuesday: '10:00 AM – 7:00 PM',
      wednesday: '10:00 AM – 7:00 PM',
      thursday: '10:00 AM – 7:00 PM',
      friday: '10:00 AM – 7:00 PM',
      saturday: '9:00 AM – 8:00 PM',
      sunday: '10:00 AM – 4:00 PM',
    },
    availableToday: true,
    services: [
      { id: 's17', name: 'Bridal Makeup Package', price: 8000, description: 'Complete bridal makeup including trial, HD finish, and hair styling.' },
      { id: 's18', name: 'Party Makeup', price: 1500, description: 'Professional makeup for parties, events, and special occasions.' },
      { id: 's19', name: 'Facial Treatment', price: 500, description: 'Deep cleansing facial with premium products suitable for all skin types.' },
      { id: 's20', name: 'Hair Styling', price: 700, description: 'Blow dry, curls, straightening, or updo styling for any occasion.' },
    ],
    reviews: [
      { id: 'r17', author: 'Riya M.', rating: 5, text: 'Sneha did my wedding makeup and I looked absolutely stunning. Everyone complimented me!', date: '2 weeks ago' },
      { id: 'r18', author: 'Ananya T.', rating: 5, text: 'The facial was so relaxing and my skin felt amazing afterwards. Very hygienic setup.', date: '1 month ago' },
      { id: 'r19', author: 'Divya K.', rating: 4, text: 'Great party makeup. She understands exactly what you want and delivers beautifully.', date: '2 months ago' },
    ],
  },
  {
    id: 6,
    name: 'Vikash Singh',
    businessName: 'FitLife with Vikash',
    category: 'fitness',
    description: "Certified fitness trainer offering personalized workout plans, yoga sessions, and nutrition guidance. I help people achieve their fitness goals through sustainable, enjoyable routines—right in your neighborhood park or at home.",
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop',
    neighborhood: 'Sector 14',
    rating: 4.8,
    reviewCount: 67,
    startingPrice: 400,
    verified: true,
    responseTime: 'Responds within 1 hour',
    memberSince: 'August 2023',
    availability: {
      monday: '6:00 AM – 10:00 AM, 5:00 PM – 8:00 PM',
      tuesday: '6:00 AM – 10:00 AM, 5:00 PM – 8:00 PM',
      wednesday: '6:00 AM – 10:00 AM, 5:00 PM – 8:00 PM',
      thursday: '6:00 AM – 10:00 AM, 5:00 PM – 8:00 PM',
      friday: '6:00 AM – 10:00 AM, 5:00 PM – 8:00 PM',
      saturday: '6:00 AM – 11:00 AM',
      sunday: '7:00 AM – 10:00 AM',
    },
    availableToday: true,
    services: [
      { id: 's21', name: 'Personal Training (per session)', price: 400, description: 'One-on-one training session tailored to your fitness level and goals.' },
      { id: 's22', name: 'Yoga Session (per session)', price: 300, description: 'Hatha yoga session focusing on flexibility, strength, and mindfulness.' },
      { id: 's23', name: 'Monthly Fitness Plan', price: 3000, description: '12 sessions per month with customized workout and basic diet plan.' },
      { id: 's24', name: 'Group Training (per person)', price: 200, description: 'Fun group workout sessions in the park. Minimum 4 participants.' },
    ],
    reviews: [
      { id: 'r20', author: 'Karan D.', rating: 5, text: "Vikash is an amazing trainer. Lost 8 kgs in 3 months with his guidance. He's very motivating!", date: '1 week ago' },
      { id: 'r21', author: 'Nisha R.', rating: 5, text: 'The yoga sessions are wonderful. I feel so much more energetic and flexible now.', date: '1 month ago' },
      { id: 'r22', author: 'Aditya S.', rating: 4, text: 'Great group training sessions. Affordable and effective. The park workouts are fun!', date: '2 months ago' },
    ],
  },
  {
    id: 7,
    name: 'Meera Joshi',
    businessName: "Meera's Tailoring & Alterations",
    category: 'tailoring',
    description: "Expert tailor with 15 years of experience. I specialize in women's ethnic wear, blouse stitching, and all types of alterations. Perfect fitting guaranteed with every order.",
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=400&fit=crop',
    neighborhood: 'Civil Lines',
    rating: 4.6,
    reviewCount: 58,
    startingPrice: 200,
    verified: false,
    responseTime: 'Responds within 3 hours',
    memberSince: 'October 2023',
    availability: {
      monday: '10:00 AM – 6:00 PM',
      tuesday: '10:00 AM – 6:00 PM',
      wednesday: '10:00 AM – 6:00 PM',
      thursday: '10:00 AM – 6:00 PM',
      friday: '10:00 AM – 6:00 PM',
      saturday: '10:00 AM – 4:00 PM',
      sunday: 'Closed',
    },
    availableToday: false,
    services: [
      { id: 's25', name: 'Blouse Stitching', price: 350, description: 'Custom blouse stitching with perfect fitting. All designs including padded, backless, and princess cut.' },
      { id: 's26', name: 'Suit/Salwar Stitching', price: 500, description: 'Complete stitching of salwar suit with your choice of style and fitting.' },
      { id: 's27', name: 'Alterations', price: 200, description: 'Hemming, taking in/out, zip replacement, and other alterations.' },
      { id: 's28', name: 'Kurta Stitching', price: 400, description: 'Custom kurta stitching for men and women with quality finishing.' },
    ],
    reviews: [
      { id: 'r23', author: 'Parul B.', rating: 5, text: 'Meera ji stitched my wedding blouse perfectly. The fitting was impeccable!', date: '2 weeks ago' },
      { id: 'r24', author: 'Geeta M.', rating: 4, text: 'Good quality stitching at reasonable rates. Takes a bit longer but worth the wait.', date: '1 month ago' },
      { id: 'r25', author: 'Sapna R.', rating: 5, text: 'Best tailor in Civil Lines. She understands exactly what you want.', date: '2 months ago' },
    ],
  },
  {
    id: 8,
    name: 'Deepak Tiwari',
    businessName: "Deepak's Home Kitchen",
    category: 'food',
    description: "Authentic North Indian home-cooked meals delivered to your doorstep. I specialize in traditional recipes passed down through generations. Fresh ingredients, no preservatives, just like mom's cooking.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop',
    neighborhood: 'Model Town',
    rating: 4.7,
    reviewCount: 83,
    startingPrice: 120,
    verified: true,
    responseTime: 'Responds within 1 hour',
    memberSince: 'April 2023',
    availability: {
      monday: '11:00 AM – 3:00 PM, 6:00 PM – 9:00 PM',
      tuesday: '11:00 AM – 3:00 PM, 6:00 PM – 9:00 PM',
      wednesday: '11:00 AM – 3:00 PM, 6:00 PM – 9:00 PM',
      thursday: '11:00 AM – 3:00 PM, 6:00 PM – 9:00 PM',
      friday: '11:00 AM – 3:00 PM, 6:00 PM – 9:00 PM',
      saturday: '11:00 AM – 9:00 PM',
      sunday: '11:00 AM – 9:00 PM',
    },
    availableToday: true,
    services: [
      { id: 's29', name: 'Lunch Thali', price: 120, description: '2 sabzi, dal, rice, roti (4), raita, and salad. Pure vegetarian.' },
      { id: 's30', name: 'Dinner Thali', price: 150, description: 'Premium dinner thali with paneer dish, dal makhani, rice, roti, and dessert.' },
      { id: 's31', name: 'Weekly Tiffin (Lunch)', price: 700, description: '6-day lunch delivery with daily changing menu. Perfect for working professionals.' },
      { id: 's32', name: 'Party Order (per plate)', price: 250, description: 'Bulk catering for small parties and gatherings. Minimum 10 plates.' },
    ],
    reviews: [
      { id: 'r26', author: 'Shikha V.', rating: 5, text: 'The tiffin service is a lifesaver! Food tastes exactly like home-cooked meals. Fresh and delicious.', date: '1 week ago' },
      { id: 'r27', author: 'Nikhil P.', rating: 5, text: 'Best home food in Model Town. The dal makhani is incredible. Reasonable prices too.', date: '3 weeks ago' },
      { id: 'r28', author: 'Ankita S.', rating: 4, text: 'Good food and prompt delivery. Sometimes the portions could be slightly bigger.', date: '1 month ago' },
    ],
  },
  {
    id: 9,
    name: 'Sonia Gill',
    businessName: "Sonia's Yoga & Wellness",
    category: 'fitness',
    description: "Certified yoga instructor offering morning yoga classes, meditation sessions, and prenatal yoga. I create a peaceful, supportive environment for practitioners of all levels.",
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31239f97?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop',
    neighborhood: 'Sector 15',
    rating: 4.9,
    reviewCount: 52,
    startingPrice: 250,
    verified: true,
    responseTime: 'Responds within 2 hours',
    memberSince: 'July 2023',
    availability: {
      monday: '6:00 AM – 9:00 AM, 5:00 PM – 7:00 PM',
      tuesday: '6:00 AM – 9:00 AM, 5:00 PM – 7:00 PM',
      wednesday: '6:00 AM – 9:00 AM, 5:00 PM – 7:00 PM',
      thursday: '6:00 AM – 9:00 AM, 5:00 PM – 7:00 PM',
      friday: '6:00 AM – 9:00 AM, 5:00 PM – 7:00 PM',
      saturday: '7:00 AM – 10:00 AM',
      sunday: '7:00 AM – 10:00 AM',
    },
    availableToday: true,
    services: [
      { id: 's33', name: 'Morning Yoga (per session)', price: 250, description: 'One-hour morning yoga class covering asanas, pranayama, and meditation.' },
      { id: 's34', name: 'Prenatal Yoga', price: 400, description: 'Specialized gentle yoga for expecting mothers. Safe and supportive practice.' },
      { id: 's35', name: 'Monthly Yoga Package', price: 2000, description: '20 sessions per month. Attend morning or evening batch as per convenience.' },
      { id: 's36', name: 'Private Yoga Session', price: 600, description: 'Personalized one-on-one yoga session at your home or in my studio.' },
    ],
    reviews: [
      { id: 'r29', author: 'Pallavi S.', rating: 5, text: 'Sonia creates such a calming atmosphere. The morning yoga sessions have transformed my daily routine.', date: '2 weeks ago' },
      { id: 'r30', author: 'Nandini G.', rating: 5, text: 'The prenatal yoga was exactly what I needed. Sonia is very knowledgeable and caring.', date: '1 month ago' },
    ],
  },
  {
    id: 10,
    name: 'Ravi Prakash',
    businessName: "Ravi's AC & Appliance Repair",
    category: 'repairs',
    description: "Expert technician for AC servicing, washing machine repair, refrigerator repair, and other home appliance services. Factory-trained with genuine spare parts.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=400&fit=crop',
    neighborhood: 'Urban Estate',
    rating: 4.5,
    reviewCount: 71,
    startingPrice: 300,
    verified: true,
    responseTime: 'Responds within 1 hour',
    memberSince: 'January 2024',
    availability: {
      monday: '9:00 AM – 7:00 PM',
      tuesday: '9:00 AM – 7:00 PM',
      wednesday: '9:00 AM – 7:00 PM',
      thursday: '9:00 AM – 7:00 PM',
      friday: '9:00 AM – 7:00 PM',
      saturday: '9:00 AM – 5:00 PM',
      sunday: 'Closed',
    },
    availableToday: true,
    services: [
      { id: 's37', name: 'AC Service & Gas Refill', price: 600, description: 'Complete AC cleaning, gas top-up, and performance check.' },
      { id: 's38', name: 'Washing Machine Repair', price: 300, description: 'Diagnosis and repair of all washing machine brands and models.' },
      { id: 's39', name: 'Refrigerator Repair', price: 350, description: 'Cooling issues, thermostat repair, compressor check, and gas filling.' },
      { id: 's40', name: 'AC Installation', price: 800, description: 'Professional split/window AC installation with copper piping.' },
    ],
    reviews: [
      { id: 'r31', author: 'Harsh V.', rating: 5, text: 'Ravi serviced our AC perfectly. It\'s cooling like new now. Very reasonable charges.', date: '1 week ago' },
      { id: 'r32', author: 'Beena L.', rating: 4, text: 'Fixed our washing machine quickly. He explained the issue clearly before starting the work.', date: '3 weeks ago' },
      { id: 'r33', author: 'Tarun S.', rating: 5, text: 'Honest and skilled technician. Doesn\'t try to overcharge or replace unnecessary parts.', date: '1 month ago' },
    ],
  },
  {
    id: 11,
    name: 'Kavita Reddy',
    businessName: "Kavita's English & Hindi Tutoring",
    category: 'tutoring',
    description: "Passionate language tutor specializing in English speaking, writing, and Hindi literature for students and adults. I also prepare students for competitive exams and interview communication skills.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=400&fit=crop',
    neighborhood: 'Sector 22',
    rating: 4.8,
    reviewCount: 45,
    startingPrice: 350,
    verified: false,
    responseTime: 'Responds within 2 hours',
    memberSince: 'September 2023',
    availability: {
      monday: '4:00 PM – 8:00 PM',
      tuesday: '4:00 PM – 8:00 PM',
      wednesday: '4:00 PM – 8:00 PM',
      thursday: '4:00 PM – 8:00 PM',
      friday: '4:00 PM – 8:00 PM',
      saturday: '10:00 AM – 5:00 PM',
      sunday: 'Closed',
    },
    availableToday: false,
    services: [
      { id: 's41', name: 'English Speaking (per hour)', price: 350, description: 'Spoken English classes with focus on pronunciation, vocabulary, and confidence building.' },
      { id: 's42', name: 'English Writing (per hour)', price: 350, description: 'Creative writing, essay writing, and formal communication skills.' },
      { id: 's43', name: 'Interview Preparation', price: 500, description: 'Mock interviews, communication coaching, and confidence building for job seekers.' },
      { id: 's44', name: 'Hindi Literature (per hour)', price: 300, description: 'Hindi language and literature tutoring for CBSE/ICSE board exams.' },
    ],
    reviews: [
      { id: 'r34', author: 'Aman R.', rating: 5, text: "Kavita ma'am helped me clear my interview for an MNC. Her communication coaching is top-notch!", date: '2 weeks ago' },
      { id: 'r35', author: 'Neelam K.', rating: 5, text: 'My daughter\'s English has improved dramatically. Very engaging teaching style.', date: '1 month ago' },
    ],
  },
  {
    id: 12,
    name: 'Mohit Chadha',
    businessName: "Mohit's Home Painting",
    category: 'home',
    description: "Professional home painting services including interior painting, exterior painting, waterproofing, and texture work. I use premium paints and ensure clean, precise work with minimal disruption.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=400&fit=crop',
    neighborhood: 'Civil Lines',
    rating: 4.6,
    reviewCount: 39,
    startingPrice: 1500,
    verified: true,
    responseTime: 'Responds within 3 hours',
    memberSince: 'December 2023',
    availability: {
      monday: '8:00 AM – 6:00 PM',
      tuesday: '8:00 AM – 6:00 PM',
      wednesday: '8:00 AM – 6:00 PM',
      thursday: '8:00 AM – 6:00 PM',
      friday: '8:00 AM – 6:00 PM',
      saturday: '9:00 AM – 4:00 PM',
      sunday: 'Closed',
    },
    availableToday: true,
    services: [
      { id: 's45', name: 'Single Room Painting', price: 1500, description: 'Complete painting of one room (up to 120 sq ft) including primer and 2 coats.' },
      { id: 's46', name: 'Full Home Painting (1BHK)', price: 8000, description: 'Complete interior painting for 1BHK apartment with premium paint options.' },
      { id: 's47', name: 'Waterproofing', price: 2000, description: 'External wall and terrace waterproofing to prevent seepage and dampness.' },
      { id: 's48', name: 'Texture/Accent Wall', price: 3000, description: 'Designer texture or accent wall with premium finish options.' },
    ],
    reviews: [
      { id: 'r36', author: 'Ajay N.', rating: 5, text: 'Mohit painted our entire flat beautifully. Very neat work and he cleaned up everything after.', date: '3 weeks ago' },
      { id: 'r37', author: 'Rita S.', rating: 4, text: 'Good quality work. The accent wall turned out exactly as I wanted. Fair pricing.', date: '2 months ago' },
    ],
  },
];

export const getProviderById = (id) => {
  return providers.find(p => p.id === parseInt(id));
};

export const getProvidersByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return providers;
  return providers.filter(p => p.category === categoryId);
};

export const searchProviders = (query) => {
  const q = query.toLowerCase();
  return providers.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.businessName.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.services.some(s => s.name.toLowerCase().includes(q))
  );
};

export const filterProviders = ({ category, priceRange, minRating, availability, neighborhood, search }) => {
  let result = [...providers];

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.businessName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.services.some(s => s.name.toLowerCase().includes(q))
    );
  }

  if (category && category !== 'all') {
    result = result.filter(p => p.category === category);
  }

  if (priceRange) {
    switch (priceRange) {
      case 'under300':
        result = result.filter(p => p.startingPrice < 300);
        break;
      case '300to500':
        result = result.filter(p => p.startingPrice >= 300 && p.startingPrice <= 500);
        break;
      case '500to1000':
        result = result.filter(p => p.startingPrice > 500 && p.startingPrice <= 1000);
        break;
      case 'above1000':
        result = result.filter(p => p.startingPrice > 1000);
        break;
    }
  }

  if (minRating) {
    result = result.filter(p => p.rating >= parseFloat(minRating));
  }

  if (availability === 'today') {
    result = result.filter(p => p.availableToday);
  }

  if (neighborhood) {
    result = result.filter(p => p.neighborhood === neighborhood);
  }

  return result;
};
