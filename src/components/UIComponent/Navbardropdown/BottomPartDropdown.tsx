export default function BottomPartDropdown() {
  return (
    <>
      <div className="block border-t border-gray-100 bg-[#fff5f5] py-[25px] pb-[22px]">
        <div className="max-w-[1336px] w-full mx-auto flex justify-between px-[59px]">
          <div className="flex items-center w-[40%]">
            <span className="text-black text-[16px] font-medium mr-1.5 tracking-[0.2px] font-['Inter',_sans-serif]">
              Ready to get started?
            </span>
            <a
              href="#"
              className="text-[#e41a26] text-[16px] font-medium leading-none p-0 no-underline transition-all duration-300 hover:underline font-['Inter',_sans-serif]"
            >
              Let&apos;s Talk
            </a>
          </div>
          <div className="flex items-center justify-end gap-6 w-[40%]">
            <a
              href="mailto:clientsupport@sparxit.com"
              className="text-[#e41a26] text-[16px] font-medium leading-none p-0 no-underline transition-all duration-300 hover:underline font-['Inter',_sans-serif]"
            >
              <span className="mr-2.5 text-[14px]">✉</span>
              contact@escalesolutions.com
            </a>
            <a
              href="tel:+919810230650"
              className="text-[#e41a26] text-[16px] font-medium leading-none p-0 no-underline transition-all duration-300 hover:underline font-['Inter',_sans-serif]"
            >
              <span className="mr-2.5 text-[14px]">📞</span>
              +91-8178045778
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
