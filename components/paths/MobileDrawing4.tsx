import { forwardRef, Ref, SVGProps } from "react";

const MobileDrawing1 = (
  props: SVGProps<SVGPathElement>,
  ref: Ref<SVGPathElement>
) => (
  <path
    ref={ref}
    d="M2749.43 2733.4s-474.67-273.1-566.8-299.44c-92.14-26.34-135.45-71.19-219.67-156.85-84.22-85.67-242.98-277.93-284.24-355.3-11.49-21.55-26.49-45.63-51.93-76.42-34.96-42.32-100-92.58-241.18-127.87-35.53-8.88-62.18-35.53-88.83-62.17-17.76-35.54 26.65-62.18 53.3-53.3 26.65 26.65 26.65 53.3 8.88 71.06-44.41 26.65-115.47 8.88-115.47-44.41 0-62.18 44.41-124.36 106.59-124.36 35.53 0 62.18 26.65 79.94 44.42 44.41 71.05 26.65 168.76-44.41 222.05-44.41 26.65-88.83 35.53-142.12 26.65-35.53-8.88-54.62-26.4-80.63-65.41-15.58-23.38-32.51-70.89-32.51-97.54-17.76-88.82-28.98-210.11 59.85-263.4 88.82-53.29 186.53 0 257.58 53.29 71.06 53.3 97.71 142.12 88.83 230.95-8.88 88.82-62.18 168.76-142.12 204.29-115.47 53.29-260.48 29.27-322.66-95.08-45.52-84.53-26.01-195.07-19.5-312.11 1.77-31.98 34.98-94.12 58.52-123.55 52.01-65.02 138.76-78.02 201.57-78.02 71.52 0 117.06 22.41 188.56 78.02 117.05 91.04 149.55 201.58 133.33 317.56-13.59 97.16-82.04 220.93-139.83 261.15-106.59 62.17-185.86 76.28-299.1 52.02-91.04-19.51-190-98.65-208.079-195.07-19.508-104.04-27.271-216.63-26.008-344.62 1.058-107.28 83.137-191.49 162.557-227.59 71.53-32.51 157.25-43.59 253.59-19.5 52.02 13 300.23 67.95 325.12 377.13 11.17 138.83-38.56 286.4-97.54 377.13-84.53 130.05-250.4 151.94-383.64 143.05-124.35-17.75-243.329-88.31-299.1-201.57-51.821-105.23-51.121-159.82-58.521-325.11-19.508-435.66 251.631-469.9 357.621-481.17 305.61-32.51 526.05 227.24 552.7 422.65 26.01 156.05-13 292.6-58.52 435.65-38.56 121.19-109.73 207.44-234.08 234.08-195.41 35.54-357.92 33.32-526.692-91.03-124.35-97.71-146.533-197.74-182.062-357.62-45.517-188.57-32.513-507.18 169.058-689.25 190.246-171.831 523.966-129.747 728.256 39.02 186.53 159.88 241.23 399.78 214.58 630.72-17.76 97.7-71.53 299.1-99.31 350.75-159.95 297.35-667.96 273.47-804.509 156.43-60.321-51.7-344.625-201.57-350.192-698.25-1.991-177.85 51.084-316.11 161.621-465.66 110.542-149.557 337.91-232.482 533.19-221.082 214.59 12.529 477 167.254 585.21 357.622 182.66 321.38 84.53 780.28-45.52 942.84-65.02 97.53-222.65 183.81-338.12 201.57-168.76 17.76-377.43 50.91-546.189 6.51-88.825-26.65-169.529-119.89-240.588-182.07-53.291-53.29-123.312-190.93-143.05-227.58-45.516-84.53-71.525-242.8-71.525-331.62 7.859-98.23 20.988-179.01 42.417-256.24 32.717-117.9 57.058-207.82 126.642-302.96 106.133-145.106 189.629-128.747 279.6-247.085 11.829-15.558 43.203-59.004 84.533-58.521 24.05.279 28.51 15.179 58.52 19.509 40.88 5.895 56.22-18.35 104.03-26.013 41.33-6.617 40.43 9.796 104.04 13.008 77.08 3.888 89.21-19.666 143.05-6.504 41.07 10.038 35.38 24.071 84.53 39.013 66.69 20.271 85.13-3.146 123.55 19.508 38.13 22.483 25.63 48.9 71.52 84.529 37.86 29.396 51.74 15.579 91.04 45.517 37.67 28.704 28.75 44.329 71.52 84.529 46.18 43.41 64.88 32.99 84.53 65.02 23.26 37.92 1.08 59.06 19.5 117.04 17.58 55.32 41.32 47.3 58.52 97.54 13.07 38.15-.48 43.19 0 169.06.26 65.19 3.96 81.49 6.51 91.03 13 48.66 31.92 55.67 32.51 91.04.26 15.9-3.47 20.02-32.51 91.03-29.6 72.38-31.45 82.13-32.51 91.03-4.3 36.09 6.63 39.44 6.5 91.03-.1 37.84-.16 63.63-13 91.03-17.19 36.66-36.65 32.28-78.03 84.53-17.45 22.02-27.72 40.14-45.52 71.53-34.82 61.4-29.32 68.32-45.52 91.03-26.92 37.76-51.26 31.42-169.05 84.53-19.06 8.59-7.27 3.73-136.55 65.03-51.41 24.37-77.65 36.6-104.04 39.01-45.47 4.14-55.07-12.29-117.04-19.51-46.73-5.44-81.65-.8-136.55 6.5-95.73 12.73-106.86 30.05-149.55 19.51-45.03-11.12-39.03-31.96-97.537-52.02-59.65-20.44-74.067-1.58-117.042-26.01-39.271-22.32-62.879-58.33-71.525-71.52-19.171-29.25-11.233-36.59-26.008-52.02-32.296-33.72-71.73-9.3-104.038-39.02-19.137-17.59-8.287-28.91-32.512-91.03-10.971-28.13-12.909-25.07-45.517-91.03-21.283-43.06-32.579-65.9-45.517-97.53-25.333-61.96-19.616-66.27-39.012-104.04-29.463-57.38-45.334-52.64-52.021-84.53-11.117-53.01 32.467-67.43 32.512-136.55.03-40.25-14.754-38.95-26.008-117.04-6.587-45.7-9.683-69 0-91.03 18.363-41.78 54.838-34.17 78.029-71.53 29.063-46.81-13.812-81.97 0-156.06 8.484-45.53 36-78.03 91.029-143.046 66.588-78.666 99.288-86.087 110.542-136.546 11.967-53.67-13.383-97.508 0-104.037 17.925-8.75 51.775 75.592 110.538 78.025 31.404 1.304 56.216-21.358 104.037-65.021 58.5-53.412 59.083-77.642 97.53-91.033 30.49-10.621 34.7 3.021 97.54 0 69.58-3.342 74.06-20.529 130.05-19.504 51.94.945 50.71 15.791 110.53 19.504 69.49 4.316 73.13-15.579 123.55-6.5 57.46 10.341 54.63 36.529 117.04 45.516 34.01 4.892 51.37-.504 84.53 13.005 25.71 10.47 43.31 25.141 52.02 32.508 36.95 31.275 33.02 48.904 65.02 71.525 18.34 12.962 17.14 5.425 58.52 26.012 33.72 16.771 57.2 28.721 78.03 52.017 19.44 21.746 12.05 25.942 32.51 52.017 33.35 42.498 55.93 35.096 71.53 65.028 17.57 33.71-8.09 48.86 6.5 97.53 9.98 33.27 23.16 30.2 45.52 78.03 3.95 8.45 18.93 41.5 26 84.53 6.4 38.88-.12 46.59 0 104.04.06 26.9.18 80.43 13.01 143.05 11.98 58.51 22.66 64.43 19.51 97.53-2.95 30.89-13.11 34.68-32.52 91.03-10.22 29.7-21.59 62.71-26 104.04-6.18 57.76 8.22 66.2 0 117.04-2.4 14.83-8.81 52.24-32.52 91.03-36.34 59.48-71 52.96-97.53 110.54-12.17 26.41-8.97 36.67-26.01 65.02-14.52 24.17-32.14 42.19-52.02 58.53-38.1 31.31-66.06 41.29-162.56 84.53-87.13 39.03-97.28 45.65-136.55 58.52-31.64 10.37-49.19 46.39-91.03 52.02-33.65 4.52-42.85-15.95-143.05-13.01-60.42 1.77-27.47 28.72-123.54 0-64.9-19.4-59.53 12.39-110.54 13.01-44.52.53-94.6 7.57-143.049-13.01-37.642-15.98-59.525-47.98-97.538-58.52-46.295-12.83-57.083 1.73-84.529-13-27.471-14.75-22.287-32.35-65.025-84.53-17.587-21.48-33.366-40.75-58.516-58.52-44.771-31.64-66.905-21.57-97.538-45.52-16.492-12.89-24.654-27.21-52.017-110.54-43.354-132.02-35.37-134.18-58.52-182.06-14.905-30.83-23.4-40.68-58.521-110.54-24.229-48.2-30.217-63.47-32.513-84.53-3.375-30.94 5.054-39.24 13.004-97.54 4.459-32.68 8.48-62.15 6.505-97.53-3.992-71.47-27.525-78.99-19.509-123.54 1.809-10.05 16.4-37.19 45.517-91.04 30.983-57.31 34.829-61.2 39.012-78.03 10.809-43.48-5.225-56.36 0-97.53 4.963-39.08 24.984-65.07 65.025-117.04 53.592-69.572 74.446-68.472 97.534-117.043 9.25-19.467 37.137-78.129 13.004-117.042-16.171-26.075-49.054-32.571-117.042-39.012C354.038 715.051-20.557 548.626 5.455 282.034 48.668-160.907 593.734 13.488 1123.59 204.376"
    {...props}
  />
);

const ForwardRef = forwardRef(MobileDrawing1);
export default ForwardRef;
