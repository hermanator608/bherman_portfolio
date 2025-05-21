import { FC } from 'react';
import Image from 'next/image';
import { CardProps } from '../types/CardProps';


const Card: FC<CardProps> = ({
  title,
  subTitle,
  location,
  period,
  description,
  technologies,
  highlights,
  headerImage,
  category,
  liveUrl,
  githubUrl,
  onClick,
}) => {
  return (
    <div
      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {/* Logo Header */}
      <div className="relative h-48 w-full">
        <Image
          src={headerImage}
          alt={`${title} Header Image`}
          fill
          className="object-cover" //"object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        {category && <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
            {category}
          </span>
        </div>

        }
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 min-w-0 mr-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            {subTitle.url ? (
              <a
                href={subTitle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                {subTitle.text}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <p className="text-gray-400">{subTitle.text}</p>
            )}
          </div>
          {period &&
            <span className="flex-shrink-0 px-3 py-1 text-sm text-blue-400 bg-blue-900/30 rounded-full border border-blue-500/20">
              {period}
            </span>
          }
        </div>

        <div className="mb-4">
          {description && <p className="text-gray-300 mb-2">{description}</p>}
          {location && <p className="text-gray-400 text-sm">{location}</p>}
        </div>

          {technologies &&
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm text-blue-400 bg-blue-900/30 rounded-full border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
}

        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-gray-400 text-sm flex items-start">
              <svg
                className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {typeof highlight === 'string' ? (
                highlight
              ) : (
                <a
                  href={highlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {highlight.text}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {/* {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )} */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 flex items-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card; 
