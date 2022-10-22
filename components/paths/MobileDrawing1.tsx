import { forwardRef, Ref, SVGProps } from "react";

const MobileDrawing1 = (
  props: SVGProps<SVGPathElement>,
  ref: Ref<SVGPathElement>
) => (
  <path
    ref={ref}
    d="M219.421 1675.37c34.062.2 62.937-9.4 89.916-18.23 58.23-19.05 114.18-40.81 161.546-69.91 83.967-51.58 131.73-112.86 136.934-186.22 1.6-22.58-3.225-73.99-3.871-77.79l-1.367-2.84c-9.666-30.83-28.033-66.83-45.45-97.26-1.579-2.77-5.183-8.19-6.879-10.92-7.821-12.62-42.454-47.58-57.746-61.12-60.562-53.63-130.242-102.29-219.042-138.39-81.295-33.052-166.437-61.865-268.475-63.107l-.82 5.796c1.8 11.825 10.175 29.042 20.087 44.242 39.942 61.269 98.913 114.299 185.163 154.699 17.521 8.21 102.912 35.83 123.437 40.88 64.438 15.88 123.358 17.45 217.367 21.12l3.466.51c10.255 1.29 22.271 1.24 29.105 1.62 47.025 2.67 93.608-1.7 139.216-7.01 29.909-3.49 59.625-11.84 89.167-15.97 32.271-4.52 62.192-11.85 90.542-20.45 42.9-13.02-19.725-137.76-50.713-172.42-50.608-56.596-120.908-100.254-210.571-132.5-51.016-18.346-105.6-31.717-164.27-38.262-10.071-1.121-20.009-2.942-30.275-.521L440.971 833c5.408 14.975 4.108 15.475 9.317 27.567 46.841 108.825 138.254 191.563 317.429 236.123 37.5 9.32 56.275 12.08 151.562 19.78 58.817-1.3 111.941.42 175.751-11.5 0 0-43.1-66.07-58.13-88.26-32.38-47.802-50.892-80.931-78.125-143.385-6.754-15.483-15.938-46.046-23.746-62.442-42.658-89.566-119.771-163.429-251.404-212.091-57.721-21.338-122.842-31.4-189.725-37.704-17.513-1.655-35.083-1.617-52.196-3.371-30.554-3.129-36.375.391-31.283 19.258 11.621 43.075 42.221 81.163 81.916 116.254 83.038 73.404 197.609 121.659 336.842 147.854 37.4 7.038 85.125 10.742 126.709 13.375l5.87.563c18.796 1.679 69.822 4.375 88.602 5.004 32.4 1.092 120.89 6.742 144.23-26.85 11-15.554 37.01-64.083 37.33-64.638 27.27-47.083 38.74-95.162 44.23-143.995 4.72-41.954-3.41-83.567-16.89-124.634-19.42-59.187-55.71-117.441-121.08-163.641 0 0-3.12 1.5-4.09 2.046-38.48 21.562-81.48 103.17-82.21 104.512-4.2 7.796-5.66 23.075-6.41 28.417-4.33 31.121-6.94 65.096 3.55 95.525 6.02 17.458 14.62 34.845 35.42 49.279 32.12 22.296 59.8 14.017 74.9-6.117 7.91-10.546 9.93-22.079 5.59-32.075-17.15-39.546-41.6-77.258-84.71-109.229l-6.79-5.542c-8.85-7.029-42.88-31.875-51.35-37.591-37.443-25.305-83.188-44.084-132.343-59.184-41.499-12.754-86.916-30.233-135.529-31.458l-3.866-.167c-1.188 61.767 29.85 118.775 67.412 174.617 36.767 54.663 88.092 104.404 155.392 146.596 11.754 7.367 49.134 28.171 49.134 28.171 52.87 35.675 124.08 56.862 185.07 86.245 4.3 2.071 17.26 7.842 25.01 10.842l17.97 8.163c43.43 19.829 79.07 44.72 116.87 68.2 5.95 3.696 9.74 7.571 19 7.287l9.39-7.616c6.81-9.913 3.12-20.276 3.12-30.359-.01-57.741 14.96-114.054 45.37-168.771 29.13-52.408 59.78-108.975 110.95-154.975l5.07-4.487c24.48-21.809 31.28-47.504 40.02-72.154 10.29-29.05 17.06-58.884 13.83-88.742-8-73.767-41.64-141.275-131.96-193.275-34.37-19.787-72.59-37.029-119.4-45.396-70.25 94.279-32.98 294.767 185.11 397.725l3.09 1.884c15.47 10.725 35.55 17.549 55.71 24.379 42.04 14.25 85.36 27.471 124.12 44.908 70.19 31.571 193.46 96.95 221.58 164.592 23.11 55.608 23.11 113.9 2.38 172.833-64.2-9.854-109.9-32.408-147.08-59.104-87.98-63.179-116.16-137.958-95.05-219.417 4.31-16.616 18.73-47.479 25.97-63.583l3.16-4.842c21.73-34.783 45.94-68.812 83.21-98.821 8.58-6.912 61.81-47.45 74.86-55.416l6.47-5.563c22.82-18.346 50.26-34.308 75.8-51.087 109.48-71.95 155.65-157.625 163.01-252.792 2.36-30.554-6.8-60.358-9.23-90.558 0 0-1.97.154-2.62.162-23.67.246-41.74 13.113-56.35 21.233-94.01 52.267-147.58 118.526-182.28 191.534-25.96 54.617-37.97 110.046-38.42 166.617-.09 11.529 1.18 32.383 1.18 32.383-.08 12.746 1.78 24.871 7.24 34.008 17.06 28.525 22.79 59.121 40.47 87.817 49.55 80.4 127.3 146.733 252.54 189.754 57.15 19.633 119.26 30.125 184.51 36.221 46.26 4.317 92.49 4.417 138.2 2.346 92.23-4.179 181.45-17.746 264.17-44.371 8.06-2.596 19.66-4.096 22.28-11.263 0 0 .18-3.02-.62-3.858-40.36-42.517-177.2-64.246-257-70.308-71.7-5.45-139.42.508-207.36 12.6-7.45 1.325-29.59-2.954-29.59-2.954 25.41-38.563 37-87.517 45.25-128.05 2.53-12.43 1-36.592-1.15-48.684-4.37-24.671-7.95-44.417-16.32-65.133-16.67-41.238-64.35-91.213-111.29-124.3 0 0-5.71 5.529-7.32 7.458-59.91 71.529-51.68 147.054-3.08 220.642 17.29-1.4 28.36-3.988 39.79-6.375 26.99-5.617 89.69-27.063 118.95-36.825 35.3-11.775 95.24-37.929 125.5-51.85 116.77-53.717 197.39-123.188 231.98-210.083 7.33-18.405 6.94-37.88 10.11-56.855 0 0 6.77-57.004-15.05-70.366-61.91 13.591-109.58 38.971-150.45 67.962-58.48 41.484-95.57 90.804-105.87 144.388-7.35 38.271-12.22 87.979 14.01 125.246l8.97 9.233c20.02 17.142 34.28 36.425 56.02 53.075 66.53 50.962 151.05 70.354 258.05 58.354 31.03-3.479 95.31-17.9 125.81-25.917 48.81-12.829 88.22-32.983 120.22-59.416 66.47-54.917 115.69-114.613 130.28-181.854 6.18-28.492 12.22-59.65-13.61-88.713-91.72 27.712-154.85 70.75-198.65 124.358-32.77 40.125-49.99 83.53-55.95 127.684-3.55 26.333-7.1 67.391-1.2 89.45 6.53 24.425 15.07 48.441 23.46 72.558 13.12 37.704 40.93 72.412 53.17 110.175 3.05 9.433 7.67 21.363 12.77 33.183 0 0 14.51 39.367 18.77 52.725 15.88 49.721 15.49 99.313 5.55 149.384-13.02 65.618-64.97 118.138-145.8 161.058-10.34 5.48-22.26 10.68-41.37 9.54-40.08-67.37-62.46-136.19-30.92-208.436 28.21-64.641 136.1-132.229 205.26-161.112 58.56-24.459 132.53-30.509 196.2-50.013 96.82-29.662 169.65-72.304 194.01-136.987 11.24-29.821-1.49-95.088-1.49-95.088-113.98 29.563-166.11 88.292-198.74 155.417-12.37 25.446-35.74 54.325-22.33 81.246 7.12 14.308 17.46 40.758 28.01 57.341 20.24 31.809 53.34 54.18 111.33 59.763 10.31.987 42.75 2.433 57.04 2.871 58.15 1.787 112.07-9.471 164.97-22.538 99.18-24.496 185.77-59.571 250.65-112.025 22.75-18.392 39.23-38.679 48.19-61.362 5.33-13.488.31-18.304-22.88-19.384-102.45-4.758-192.67 14.267-272.98 51.18-77.76 35.745-134.51 81.437-172.04 136.137-5.33 7.771-18.81 28.846-24.43 38.604-21.74 37.759-27.46 77.533-30.85 117.05-3.31 38.696 7.73 77.206 20.03 114.966 6.23 19.11 6.85 41.62 36.79 55.86 0 0 29.45-32.43 38.22-43.25 77.27-95.247 188.26-165.451 371.44-182.547 29.1-2.712 42.17 4.417 35.02 23.163-11.25 29.492-46.4 99.764-50.35 105.924-11.68 18.24-55.72 47.73-72.05 59.94-51.73 38.64-167.8 54.54-185.48 54.12 10.61-30.18 101.1-74.18 152.7-88.58 13.69-3.82 91.99-20.06 123.97-23.58 42.94-4.73 86.99-6.23 130.81-3.97 89.4 4.61 175.8 16.48 259.98 41.46-27.07 31.02-66.24 53.05-112.58 69.8-73.48 26.55-153.67 40.92-239.1 47.4-70.45 5.34-200.28 1.74-277.95-3.74-15-4.54-28.46 4.06-24.74 14.89 9.44 27.47 35.32 50.01 63.91 71.17 46.76 34.62 156.64 74.7 217.08 90.82 84 22.39 174 23.61 262.47 4 40.41-8.96 85.6-30.75 105.85-52.81-28.02-16.22-66.17-17.79-100.08-19.91-74.95-4.7-150.09-1.98-217.11 22.56-25.86 9.46-51.44 14.55-73.17 33.4-26.07 22.62-65.17 76.98-71.84 101.45-9.27 34.04 12.99 66.81 37.76 96.73 60.78 73.43 163.95 111.92 294.47 129.19 57.04 7.55 113.55 6.22 170.52 7.44 0 0-195.54-175.43-338.16-209.62-78.81-18.89-161.27-27.77-245.87-32.3-44.94-2.41-90-4.66-133.94-2.18-58.55 3.3-117.64 4.47-175.6 13.56-29.18 4.58-46.41 6.13-77.22 8.31 0 0 8.81-16.13 11.16-20.84 23.84-47.9 37.96-95.81 25.78-146.56-13.64-56.85-42.76-108.82-102.64-153.71l-3.05-1.84c-83.2 50.03-121.89 113.51-149.14 180.65-17.75 43.72-20.51 88.08-19.1 132.81.37 11.77 19.29 59.74 19.29 59.74 58.2 143.64 301.38 186.99 461.07 170.33-6.87-31.8-30.95-58.79-63.78-82.88-65.65-48.19-153.8-73.5-251.42-86.91-46.63-6.4-88.38-14.53-147.81-14.85-19.35-.11-77.31 1.71-77.31 1.71-87.33.85-172.54 7.38-256.68 23.22-97.65 18.37-249.56 44.5-325.58 84.9-127.98 53.08-241.67 145.84-241.67 250v1137.5"
    {...props}
  />
);

const ForwardRef = forwardRef(MobileDrawing1);
export default ForwardRef;
