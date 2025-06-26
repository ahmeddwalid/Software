
import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import { Category } from '../types';
import { AppItemCard } from './AppItemCard';

interface CategoryCardProps {
  category: Category;
}

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const MODAL_TARGET_WIDTH = 'min(90vw, 672px)'; // approx max-w-xl
const MODAL_TARGET_HEIGHT = 'min(90vh, 80vh)';
const MODAL_TARGET_BORDER_RADIUS = '0.75rem'; // rounded-xl
const TRANSITION_DURATION_MS = 300; // Corresponds to Tailwind's duration-300

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [applyOpenTransition, setApplyOpenTransition] = useState(false);
  const [initialRect, setInitialRect] = useState<{ top: number; left: number; width: number; height: number; borderRadius: string } | null>(null);
  
  const categoryId = `category-content-${category.name.replace(/\s+/g, '-')}`;
  const titleId = `category-title-${category.name.replace(/\s+/g, '-')}`;
  
  const modalRef = useRef<HTMLDivElement>(null);
  const gridItemRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    if (gridItemRef.current) {
      const rect = gridItemRef.current.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(gridItemRef.current);
      setInitialRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        borderRadius: computedStyle.borderRadius,
      });
      setIsExpanded(true); // Triggers useEffect for animation
    }
  };

  const closeModal = () => {
    setApplyOpenTransition(false); // Trigger modal to shrink and fade
    setTimeout(() => {
      setIsExpanded(false);
      // setInitialRect(null); // Optionally clear, or let it be overridden on next open
    }, TRANSITION_DURATION_MS);
  };

  useEffect(() => {
    let openFrameId: number;

    if (isExpanded && initialRect) {
      document.body.style.overflow = 'hidden';
      // Next frame: apply target styles for transition
      openFrameId = requestAnimationFrame(() => {
        setApplyOpenTransition(true);
      });

      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };
      document.addEventListener('keydown', handleEscapeKey);

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscapeKey);
        cancelAnimationFrame(openFrameId);
        // Ensure applyOpenTransition is reset if modal closes abruptly
        if (applyOpenTransition) setApplyOpenTransition(false); 
      };
    } else {
      // Ensure body overflow is reset if modal is not expanded
      document.body.style.overflow = '';
    }
  }, [isExpanded, initialRect]); // Removed applyOpenTransition from deps to control it manually

  const modalShellStyle: CSSProperties = {};
  if (isExpanded && initialRect) {
    if (applyOpenTransition) {
      // Target state: centered, full size
      modalShellStyle.top = '50%';
      modalShellStyle.left = '50%';
      modalShellStyle.width = MODAL_TARGET_WIDTH;
      modalShellStyle.height = MODAL_TARGET_HEIGHT;
      modalShellStyle.borderRadius = MODAL_TARGET_BORDER_RADIUS;
      modalShellStyle.opacity = 1;
      modalShellStyle.transform = 'translate(-50%, -50%)';
    } else {
      // Initial state (or closing target state): matches grid item
      modalShellStyle.top = `${initialRect.top}px`;
      modalShellStyle.left = `${initialRect.left}px`;
      modalShellStyle.width = `${initialRect.width}px`;
      modalShellStyle.height = `${initialRect.height}px`;
      modalShellStyle.borderRadius = initialRect.borderRadius;
      modalShellStyle.opacity = 0;
      modalShellStyle.transform = 'translate(0, 0) scale(1)'; // Start scale at 1, or slightly smaller if preferred
    }
  }

  return (
    <>
      {/* Original Card (Grid Item) */}
      <div
        ref={gridItemRef}
        className={`group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-primary-light transition-all duration-300 ease-in-out overflow-hidden border border-gray-200 dark:border-gray-700
                    ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} // Hide when modal is open
      >
        <div 
          className="p-6 cursor-pointer" 
          onClick={openModal} 
          role="button" 
          tabIndex={0} 
          onKeyDown={(e) => e.key === 'Enter' && openModal()}
          aria-expanded={isExpanded}
          aria-controls={categoryId} 
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light group-hover:text-secondary dark:group-hover:text-secondary-light transition-colors duration-300">
              {category.name}
            </h3>
            <ChevronDownIcon 
              className="w-5 h-5 text-gray-400 dark:text-gray-500 transform transition-transform duration-300 rotate-0 group-hover:text-secondary dark:group-hover:text-secondary-light"
            />
          </div>
        </div>
        <div id={categoryId} className="hidden"></div>
      </div>

      {/* Modal - Rendered when isExpanded is true, even if initialRect is not yet set (it will be immediately) */}
      {isExpanded && initialRect && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-40 transition-opacity ease-in-out`}
            style={{transitionDuration: `${TRANSITION_DURATION_MS}ms`, opacity: applyOpenTransition ? 1 : 0}}
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Expanded Card Modal Shell */}
          <div
            ref={modalRef}
            style={modalShellStyle}
            className={`fixed z-50 bg-white dark:bg-gray-800 shadow-2xl border border-gray-300 dark:border-gray-700 
                       flex flex-col
                       transition-all ease-in-out`}
            // Ensure transition duration matches JS timeout
            // Tailwind: duration-300 = 300ms
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            {/* Card Header */}
            <div 
              className="p-5 cursor-pointer border-b border-gray-200 dark:border-gray-700 flex-shrink-0
                         transition-opacity ease-in-out"
              style={{transitionDuration: `${TRANSITION_DURATION_MS * 0.5}ms`, transitionDelay: `${applyOpenTransition ? TRANSITION_DURATION_MS * 0.5 : 0}ms`, opacity: applyOpenTransition ? 1:0 }}
              onClick={closeModal}
              role="button" 
              tabIndex={0} 
              onKeyDown={(e) => e.key === 'Enter' && closeModal()}
            >
              <div className="flex justify-between items-center">
                <h3 id={titleId} className="text-xl font-semibold text-primary dark:text-primary-light">
                  {category.name}
                </h3>
                <ChevronDownIcon 
                  className="w-5 h-5 text-gray-400 dark:text-gray-500 transform transition-transform duration-300 rotate-180" 
                />
              </div>
            </div>

            {/* Card Content - scrollable */}
            <div 
              className="px-5 py-4 space-y-3 overflow-y-auto flex-grow
                         transition-opacity ease-in-out transform"
              style={{
                transitionDuration: `${TRANSITION_DURATION_MS * 0.66}ms`, 
                transitionDelay: `${applyOpenTransition ? TRANSITION_DURATION_MS * 0.33 : 0}ms`, 
                opacity: applyOpenTransition ? 1 : 0,
                transform: applyOpenTransition ? 'scale(1)' : 'scale(0.95)'
              }}
            >
              {category.apps.map((app) => (
                <AppItemCard key={app.name} app={app} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
