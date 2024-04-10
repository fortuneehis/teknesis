import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <section className="pt-40 -z-10 md:pt-20 flex-col flex sticky left-0 bottom-0 pb-5 md:pb-10 px-[24px] md:px-[32px]">
      <div className="w-full mb-4 md:mb-8 text-[#1b1b1b]">
        <svg
          className="w-full h-full"
          viewBox="0 0 57 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.12 1.672V0.244H5.46V1.672H3.624V7H1.944V1.672H0.12ZM8.244 5.668H11.844V7H6.6V0.244H11.712V1.672H8.244V2.908H10.824V4.252H8.244V5.668ZM13.0013 7V0.244H14.6693V3.112L17.0933 0.244H19.2773V0.4L16.7933 2.848L19.4213 6.844V7H17.5133L15.5813 4.048L14.6693 4.948V7H13.0013ZM24.6714 0.244H26.4234V7H23.2074L21.9474 0.976H21.9234V7H20.1834V0.244H23.1594L24.6474 6.268H24.6714V0.244ZM29.326 5.668H32.926V7H27.682V0.244H32.794V1.672H29.326V2.908H31.906V4.252H29.326V5.668ZM36.7473 7.12C36.3633 7.12 35.9873 7.076 35.6193 6.988C35.2513 6.9 34.9193 6.76 34.6233 6.568C34.3273 6.368 34.0873 6.112 33.9033 5.8C33.7273 5.488 33.6393 5.112 33.6393 4.672H35.3193C35.3193 4.72 35.3353 4.796 35.3673 4.9C35.4073 4.996 35.4793 5.1 35.5833 5.212C35.6953 5.324 35.8513 5.42 36.0513 5.5C36.2593 5.572 36.5353 5.608 36.8793 5.608C37.0313 5.608 37.1873 5.596 37.3473 5.572C37.5073 5.548 37.6433 5.5 37.7553 5.428C37.8673 5.348 37.9233 5.228 37.9233 5.068C37.9233 4.9 37.8433 4.768 37.6833 4.672C37.5313 4.576 37.3273 4.5 37.0713 4.444C36.8233 4.38 36.5473 4.316 36.2433 4.252C35.9473 4.188 35.6513 4.108 35.3553 4.012C35.0593 3.916 34.7873 3.788 34.5393 3.628C34.2993 3.46 34.1113 3.248 33.9753 2.992C33.8473 2.728 33.7953 2.4 33.8193 2.008C33.8593 1.416 34.1393 0.956 34.6593 0.628C35.1793 0.292 35.9033 0.124 36.8313 0.124C37.3273 0.124 37.7913 0.212 38.2233 0.388C38.6633 0.564 39.0193 0.832 39.2913 1.192C39.5713 1.552 39.7113 2.008 39.7113 2.56H38.0913C38.0913 2.312 38.0073 2.128 37.8393 2.008C37.6793 1.88 37.4833 1.796 37.2513 1.756C37.0273 1.716 36.8233 1.696 36.6393 1.696C36.3433 1.696 36.0953 1.732 35.8953 1.804C35.7033 1.876 35.6073 2.016 35.6073 2.224C35.6073 2.408 35.6873 2.552 35.8473 2.656C36.0073 2.752 36.2153 2.832 36.4713 2.896C36.7273 2.952 37.0073 3.012 37.3113 3.076C37.6233 3.132 37.9313 3.204 38.2353 3.292C38.5393 3.38 38.8113 3.504 39.0513 3.664C39.2993 3.816 39.4913 4.02 39.6273 4.276C39.7713 4.532 39.8273 4.86 39.7953 5.26C39.7553 5.844 39.4593 6.3 38.9073 6.628C38.3633 6.956 37.6433 7.12 36.7473 7.12ZM44.5351 5.572V7H41.1271V5.572H42.0031V1.672H41.1271V0.244H44.5351V1.672H43.6711V5.572H44.5351ZM48.7356 7.12C48.3516 7.12 47.9756 7.076 47.6076 6.988C47.2396 6.9 46.9076 6.76 46.6116 6.568C46.3156 6.368 46.0756 6.112 45.8916 5.8C45.7156 5.488 45.6276 5.112 45.6276 4.672H47.3076C47.3076 4.72 47.3236 4.796 47.3556 4.9C47.3956 4.996 47.4676 5.1 47.5716 5.212C47.6836 5.324 47.8396 5.42 48.0396 5.5C48.2476 5.572 48.5236 5.608 48.8676 5.608C49.0196 5.608 49.1756 5.596 49.3356 5.572C49.4956 5.548 49.6316 5.5 49.7436 5.428C49.8556 5.348 49.9116 5.228 49.9116 5.068C49.9116 4.9 49.8316 4.768 49.6716 4.672C49.5196 4.576 49.3156 4.5 49.0596 4.444C48.8116 4.38 48.5356 4.316 48.2316 4.252C47.9356 4.188 47.6396 4.108 47.3436 4.012C47.0476 3.916 46.7756 3.788 46.5276 3.628C46.2876 3.46 46.0996 3.248 45.9636 2.992C45.8356 2.728 45.7836 2.4 45.8076 2.008C45.8476 1.416 46.1276 0.956 46.6476 0.628C47.1676 0.292 47.8916 0.124 48.8196 0.124C49.3156 0.124 49.7796 0.212 50.2116 0.388C50.6516 0.564 51.0076 0.832 51.2796 1.192C51.5596 1.552 51.6996 2.008 51.6996 2.56H50.0796C50.0796 2.312 49.9956 2.128 49.8276 2.008C49.6676 1.88 49.4716 1.796 49.2396 1.756C49.0156 1.716 48.8116 1.696 48.6276 1.696C48.3316 1.696 48.0836 1.732 47.8836 1.804C47.6916 1.876 47.5956 2.016 47.5956 2.224C47.5956 2.408 47.6756 2.552 47.8356 2.656C47.9956 2.752 48.2036 2.832 48.4596 2.896C48.7156 2.952 48.9956 3.012 49.2996 3.076C49.6116 3.132 49.9196 3.204 50.2236 3.292C50.5276 3.38 50.7996 3.504 51.0396 3.664C51.2876 3.816 51.4796 4.02 51.6156 4.276C51.7596 4.532 51.8156 4.86 51.7836 5.26C51.7436 5.844 51.4476 6.3 50.8956 6.628C50.3516 6.956 49.6316 7.12 48.7356 7.12ZM54.7954 4.252C54.4114 4.252 54.0634 4.16 53.7514 3.976C53.4394 3.792 53.1874 3.544 52.9954 3.232C52.8114 2.92 52.7194 2.576 52.7194 2.2C52.7194 1.816 52.8114 1.468 52.9954 1.156C53.1874 0.844 53.4394 0.596 53.7514 0.412C54.0634 0.228 54.4114 0.136 54.7954 0.136C55.1714 0.136 55.5114 0.228 55.8154 0.412C56.1274 0.596 56.3754 0.844 56.5594 1.156C56.7434 1.468 56.8354 1.816 56.8354 2.2C56.8354 2.576 56.7434 2.92 56.5594 3.232C56.3754 3.544 56.1274 3.792 55.8154 3.976C55.5114 4.16 55.1714 4.252 54.7954 4.252ZM54.7954 3.736C55.2754 3.736 55.6474 3.584 55.9114 3.28C56.1834 2.976 56.3194 2.616 56.3194 2.2C56.3194 1.776 56.1834 1.412 55.9114 1.108C55.6474 0.804 55.2754 0.651999 54.7954 0.651999C54.3074 0.651999 53.9274 0.804 53.6554 1.108C53.3834 1.412 53.2474 1.776 53.2474 2.2C53.2474 2.616 53.3834 2.976 53.6554 3.28C53.9274 3.584 54.3074 3.736 54.7954 3.736ZM54.0154 3.136V1.204H54.7954C55.0594 1.204 55.2634 1.248 55.4074 1.336C55.5594 1.424 55.6354 1.572 55.6354 1.78C55.6354 2.156 55.4514 2.344 55.0834 2.344C55.2114 2.344 55.2994 2.376 55.3474 2.44C55.3954 2.496 55.4274 2.56 55.4434 2.632C55.4594 2.696 55.4834 2.748 55.5154 2.788C55.5554 2.82 55.6234 2.816 55.7194 2.776V3.04C55.6394 3.112 55.5434 3.152 55.4314 3.16C55.3274 3.168 55.2354 3.136 55.1554 3.064C55.0754 2.984 55.0354 2.856 55.0354 2.68C55.0354 2.576 55.0114 2.492 54.9634 2.428C54.9154 2.356 54.7594 2.336 54.4954 2.368V3.136H54.0154ZM54.4954 2.032H54.7354C54.8954 2.032 55.0074 2.024 55.0714 2.008C55.1434 1.992 55.1794 1.932 55.1794 1.828C55.1794 1.7 55.1354 1.628 55.0474 1.612C54.9674 1.596 54.8474 1.588 54.6874 1.588H54.4954V2.032Z"
            fill="#1B1B1B"
          />
        </svg>
      </div>
      <div className="border-t-2 my-8 md:my-10 border-[#6e6e6e] border-opacity-15"></div>
      <div className="flex flex-col md:flex-row items-center text-[2rem] md:text-[2.6rem] md:items-start md:justify-between">
        <p className="order-3 md:order-1">
          &copy;{new Date().getFullYear()} Teknesis. All rights eserved
        </p>
        <SocialLinks />
        <p className="order-1 md:order-3">Nigeria</p>
      </div>
    </section>
  );
}