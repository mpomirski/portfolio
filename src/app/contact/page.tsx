'use client';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import ButtonState from '@/utils/ButtonState';
import React, { useState } from 'react';
import github_icon from '@/assets/github.svg';
import linkedin_icon from '@/assets/linkedin.png';
import gitlab_icon from '@/assets/gitlab.png';
import email_icon from '@/assets/email.png';
import Image from 'next/image';

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
              className="flex flex-row items-center"
            >
              <Image
                src={linkedin_icon}
                alt="LinkedIn"
                width={25}
                height={25}
                className="inline-block mr-1 "
              />
              LinkedIn: Michał Pomirski
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mpomirski"
              target="_blank"
              className="flex flex-row items-center"
            >
              <Image
                src={github_icon}
                alt="github"
                width={25}
                height={25}
                className="inline-block mr-1"
              />
              GitHub: mpomirski
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.com/mpomirski"
              target="_blank"
              className="flex flex-row items-center"
            >
              <Image
                src={gitlab_icon}
                alt="gitlab"
                width={25}
                height={25}
                className="inline-block mr-1"
              />
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
              <a
                href="mailto:michal.pomirski01@gmail.com"
                target="_blank"
                className="flex flex-row items-center"
              >
                <Image
                  src={email_icon}
                  alt="email"
                  width={25}
                  height={25}
                  className="inline-block mr-1"
                />
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
