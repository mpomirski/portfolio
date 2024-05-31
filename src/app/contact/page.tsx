'use client';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import ButtonState from '@/utils/ButtonState';
import React, { useState } from 'react';
import Image from 'next/image';
import introduction from '@/utils/introduction.json';
import contacts from '@/utils/contacts.json';

const ContactPage: React.FC = () => {
  const [hiddenEmail, setHiddenEmail] = useState(true);
  const text = introduction.find((intro) => intro.page === 'contact');
  const intro = text?.introduction || '';
  const description = text?.description || '';
  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.CONTACT} />
      <Introduction
        introduction={intro}
        description={description}
        showImage={false}
        className="relative w-full max-md:h-16 md:h-0 mb-10"
      />
      <main className="min-h-32">
        <ul>
          {contacts.map((contact) => {
            if (contact.id === 'email') {
              if (hiddenEmail) {
                return (
                  <li key={contact.id}>
                    <button
                      onClick={() => setHiddenEmail(false)}
                      className="bg-[var(--background-color)] outline-none
                                text-center text-[var(--foreground-color)]"
                    >
                      Show email
                    </button>
                  </li>
                );
              } else {
                return (
                  <li key={contact.id}>
                    <a
                      href={`mailto:${contact.link}`}
                      className="flex flex-row items-center"
                    >
                      <Image
                        src={contact.image.src}
                        alt={contact.image.alt}
                        width={25}
                        height={25}
                        className="inline-block mr-1"
                      />
                      {contact.text}
                    </a>
                  </li>
                );
              }
            } else {
              return (
                <li key={contact.id}>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="flex flex-row items-center"
                  >
                    <Image
                      src={contact.image.src}
                      alt={contact.image.alt}
                      width={25}
                      height={25}
                      className="inline-block mr-1"
                    />
                    {contact.text}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </main>
    </div>
  );
};

export default ContactPage;
