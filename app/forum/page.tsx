import React from 'react';

const ForumPage: React.FC = () => {
  return (
    <main className="w-full">
      <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        <h1 className="mb-8 text-5xl font-bold">Community Forum</h1>
        <div className="prose mx-auto max-w-6xl text-base leading-7 text-black mb-8 dark:text-white">
          <p>
            Welcome to the Track Price Canada Community Forum! This is a place for our users to share insights, ask questions, and engage in discussions related to price tracking and the best shopping deals.
          </p>

          <h2>Forum Categories</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>General Discussions:</strong> Talk about anything related to shopping, saving money, and price tracking.
            </li>
            <li>
              <strong>Deals & Offers:</strong> Share the latest deals and discuss ongoing offers.
            </li>
            <li>
              <strong>Support:</strong> Need help with Track Price Canada? Post your questions here and the community or support team will help.
            </li>
          </ul>

          <h2>How to Participate</h2>
          <p>
            To participate in the forum, simply create an account or log in. You can start new threads, reply to posts, and interact with other members of our community.
          </p>

          <h2>Forum Guidelines</h2>
          <ul className="list-disc pl-5">
            <li>Be respectful to others at all times.</li>
            <li>No spam or self-promotion without prior approval.</li>
            <li>Keep posts on-topic and relevant to the category.</li>
          </ul>

          <p>
            We look forward to having you as a part of our growing community. Happy tracking and happy savings!
          </p>
        </div>

        <p className="text-sm italic">This page was last updated on October 4, 2024.</p>
      </div>
    </main>
  );
};

export default ForumPage;
