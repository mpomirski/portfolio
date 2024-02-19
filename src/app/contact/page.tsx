'use client';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import ButtonState from '@/utils/ButtonState';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [hiddenEmail, setHiddenEmail] = useState(true);
  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.CONTACT} />
      <Introduction
        introduction="Contact me:"
        description=""
        showImage={false}
        className="relative w-full max-md:h-16 md:h-0 mb-10"
      />
      <main className="min-h-32">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/michal-pomirski/"
              target="_blank"
            >
              LinkedIn: Michał Pomirski
            </a>
          </li>
          <li>
            <a href="https://github.com/mpomirski" target="_blank">
              GitHub: mpomirski
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/mpomirski" target="_blank">
              GitLab: mpomirski
            </a>
          </li>
          <li>
            {hiddenEmail && (
              <button
                onClick={() => setHiddenEmail(false)}
                className="bg-[var(--background-color)] outline-none text-center text-[var(--foreground-color)]"
              >
                Show email
              </button>
            )}
            {!hiddenEmail && (
              <a href="mailto:michal.pomirski01@gmail.com" target="_blank">
                Email: michal.pomirski01@gmail.com
              </a>
            )}
          </li>
        </ul>
      </main>
    </div>
  );
};

export default ContactPage;
