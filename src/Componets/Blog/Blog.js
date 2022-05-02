import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-3xl text-center text-red-400 mt-4">Question Ans</h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="p-8 bg-white border rounded shadow-sm">
                        <h5 className="text-bold m-2">1: Difference between javascript and nodejs?</h5>
                        <p className="mb-5 text-gray-700">Ans :
                        JavaScript হল একটি সাধারণ প্রোগ্রামিং ভাষা যা যেকোনো ব্রাউজারে JavaScript ইঞ্জিন চালায়। যেখানে Node js হল একটি জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার জন্য একটি দোভাষী বা চলমান পরিবেশ যা অনেক বাড়াবাড়ি ধারণ করে, এটির জন্য লাইব্রেরি প্রয়োজন যা ভাল ব্যবহারের জন্য জাভাস্ক্রিপ্ট প্রোগ্রামিং থেকে সহজেই অ্যাক্সেস করা যেতে পারে।
                        </p>
                        
                    </div>
                    <div className="p-8 bg-white border rounded shadow-sm">
                    <h5 className="text-bold m-2">2:When should you use nodejs and when should you use mongodb?</h5>
                        <p className="mb-5 text-gray-700">Ans:
                        MongoDB একটি API লাইব্রেরি Offersকরে যা একটি Nodejs অ্যাপ্লিকেশনের মধ্যে চালিত হয় যাতে আপনি MongoDB-তে প্রোগ্রাম্যাটিক অ্যাক্সেস দিতে পারেন যাতে আপনি ডাটাবেস তৈরি করতে পারেন এবং তারপরে MongoDB ডাটাবেস থেকে ডেটা যোগ, প্রশ্ন, আপডেট বা মুছে ফেলতে পারেন। মঙ্গোডিবি-তে পাইথন, জাভা, ইত্যাদির মতো অন্যান্য প্রোগ্রামিং পরিবেশের জন্য API লাইব্রেরিও রয়েছে...
                        </p>
                        
                    </div>
                    <div className="p-8 bg-white border rounded shadow-sm">
                    <h5 className="text-bold m-2">3:What is the purpose of jwt and how does it work?</h5>
                        <p className="mb-5 text-gray-700">
                        SON ওয়েব টোকেন (JWT) হল একটি ওপেন স্ট্যান্ডার্ড (RFC 7519) যা JSON অবজেক্ট হিসাবে পক্ষগুলির মধ্যে নিরাপদে তথ্য প্রেরণের জন্য একটি কম্প্যাক্ট এবং স্বয়ংসম্পূর্ণ উপায় সংজ্ঞায়িত করে। এই তথ্য যাচাই এবং বিশ্বাস করা যেতে পারে কারণ এটি ডিজিটাল স্বাক্ষরিত।
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blog;