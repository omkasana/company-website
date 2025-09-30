import Link from 'next/link';

interface BreadcrumbProps {
  breadcrumbPath: string[];
}

const Breadcrumb = ({ breadcrumbPath }: BreadcrumbProps) => {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Home
          </Link>
          
          {breadcrumbPath.map((crumb, index) => (
            <div key={index} className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              
              {index === breadcrumbPath.length - 1 ? (
                <span className="text-slate-900 font-medium">{crumb}</span>
              ) : (
                <Link 
                  href={`/${crumb.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  {crumb}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
