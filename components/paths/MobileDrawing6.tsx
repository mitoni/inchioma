import { forwardRef, Ref, SVGProps } from "react";

const MobileDrawing1 = (
  props: SVGProps<SVGPathElement>,
  ref: Ref<SVGPathElement>
) => (
  <path
    ref={ref}
    d="M4.167 650.878c295.833 100 651.45-108.075 692.312-108.075 50.158 0 62.125 32.771 71.721 115.071 2.608 22.371 7.138 44.942 14.617 65.6 3.466 9.571 17.325 8.35 18.775-1.729 14.096-98.046 54.433-390.833 60.137-419.938 2.079-10.629 19.496-14.15 21.783-3.566 21.888 101.35 36.138 143.237 35.405 196.846-1.079 78.708-2.829 158.233 11.833 235.95 5.008 26.529 3.95 242.991 40.858 169.312 13.93-27.812 43.542-133.142 41.582-162.675-2.44-36.642-3.99-73.4-2.95-110.129 1.69-59.846 10.08-120.696 33.42-176.046 4.73-11.221 21.24-9.3 23.41 2.679 8.68 47.938 20.1 139.121 54.14 201.842 7.39 13.608 27.91 9.558 29.78-5.813 6.16-50.587 20.18-113.912 29.06-162.404 1.47-7.991 12.59-8.796 15.2-1.1 14.2 41.896 33.8 96.538 46.4 133.946 3.76 11.167 19.97 10.438 22.49-1.075 7.81-35.708 10.51-91.742 14.01-138.808 3.87-51.938 8.91-89.659 20.19-138.317 2.06-8.917 14.93-8.362 16.13.708 5.87 44.588 13.85 110.38 14.68 119.425-6.03-8.412 17.75 173.096 30.64 290.484.69 6.254 9.73 6.375 10.57.141 5.82-43.25 15.88-105.187 28.36-130.15 20.06-20.066 30.1-50.158 50.16-70.225 30.1-20.062 70.22-30.095 114.37-35.42 46.8-3.555 82.24-5.134 92.62-61.496.65 5.446 7.66-24.938 13.86-51.813 1.77-7.675 12.92-7.025 13.72.817 5.47 53.267 16.44 144.337 38.95 156.754 45.19 24.938 21.72-127.704 70.98-120.667 34.78 4.971 12.81 154.471 39.44 184.709 44.94 51.029 58.58-58.971 63.29-82.879 9.72-49.325 8.94-85.263 17.92-150.038 1.61-11.625 18.07-12.904 21.27-1.612 16.26 57.295 17.42 128.775 23.74 180.7 9.21 75.641 8.24 128.137 37.41 192.8 30-18.93 33.65-148.53 57.02-242.5 13.68-55.03 40.31-229.175 68.21-66.625 3.42 19.966 13.36 69.541 20.77 106.029 2.11 10.391 16.79 10.829 19.52.583 6.61-24.858 14.84-53.5 20.29-64.479 17.56-35.363 37.27-13.633 57.19 3.458 60.6 52.021 39.44-71.366 72.91-76.029 38.95-5.429 33.08 52.896 34.6 74.271 2.38 33.492 22.09 62.054 44.42 24.333 18.09-30.541 28.06-36.15 64.55-39.221 30.33-2.55 64.51-.375 90.62-18.937 57.59-40.942 57.59-154.821 45.01-216.183C2575.83 172.67 2529.8 103.62 2465 59.62c-138-93.7-334.4-58.05-444.3 61.833-20.15-33.421-30.89-42.225-50.99-58.962-143.26-119.275-358.65-40.363-456.05 99.491-123.56 177.421-4.33 394.842 131.04 525.592 84.19 81.321 183.13 145.808 266.86 227.567 18.73 18.287 57.94 57.096 88.48 87.379 23.77 23.57 61.36 25.69 87.61 4.93 22.28-17.622 48.04-37.688 65.91-50.668 146.72-106.587 321.18-210.841 395.71-384.808 17.73-41.379 37.7-96.142 12.75-138.529-14.48-24.613-65.25-67.275-79.2-18.563-10.15 35.463 32.46 68.767 58.65 84.188 45.54 26.812 100.93 31.512 151.38 43.733-.25-25.85 3.61-88.8 13.61-138.604 12.99-64.642 36.13-172 61.03-106.771 20.22 52.954 22.27 198.209 26.6 254.525 3.62 47.004 8.44 94.109 17.38 140.421 2.19 11.3 18.47 11.017 20.13-.371 7.16-49.162 17.2-124.112 24.25-184.729 8.68-74.683 2.36-131.583 24.32-205.767 4.68-15.787 17.6-109.195 37.53-112.312 26.3-4.117 35.31 98.429 41.51 117 45.9 137.342 29.57 283.925 55.81 424.458 2.13 11.413 18.23 12.217 21.62 1.113 18.76-61.513 17.62-188.563 46.08-278.975 3.41-10.842 18.63-10.917 22.14-.104 14.8 45.616 17.89 75.395 28.2 116.379 7.26 28.854 55.85 94.95 65.05 40.283 19.69-116.937-6.96-160.412 25.06-264.325 3.96-12.858 22.32-12.279 25.56.779 18.9 76.088 6.43 229.021 27.77 355.3 4.97 29.409 11.72 95.492 33.55 100.642 9.76 2.308 34.88-68.333 34.88-98.433 8.9-106.817-13.79-213.634 5.69-313.03 1.64-8.391 13.73-8.145 14.85.33 7.95 60.066 27.71 172.666 89.81 202.35 77.34 36.962 371.3-2.4 736.39-109.575"
    {...props}
  />
);

const ForwardRef = forwardRef(MobileDrawing1);
export default ForwardRef;
