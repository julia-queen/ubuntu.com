export const getTestURL = (URL) => `${URL}?test_backend=true`;
export const getRandomEmail = () =>
  `cypress-test-${Math.random().toString(36).substr(2, 10)}@canonical.com`;

export const standardFormUrls = [
  "/openstack/contact-us",
  "/appliance/contact-us",
  "/ai/contact-us",
  "/containers/contact-us",
  "/download/contact-us",
  "/financial-services/contact-us",
  "/gov/contact-us",
  "/kubernetes/contact-us",
  "/managed/contact-us",
  "/security/contact-us",
  "/server/contact-us",
  "/support/contact-us",
  "/training/contact-us",
  "/wsl/contact-us",
  "/aws/contact-us",
  "/azure/contact-us",
  "/ceph/contact-us",
  "/core/contact-us",
  "/core/smartstart/contact-us",
  "/dell/contact-us",
  "/desktop/contact-us",
  "/gcp/contact-us",
  "/ibm/contact-us",
  "/internet-of-things/contact-us",
  "/masters-conference/contact-us",
  "/observability/contact-us",
  "/telco/osm/contact-us",
];

export const interactiveForms = [
  {
    url: "/",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3,
  },
  {
    url: "/16-04/azure",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
//   {
//     url: "/advantage",
//     inputs: [
//       [/First name/, "test"],
//       [/Last name/, "test"],
//       [/Work email/, "test@gmail.com"],
//     ],
//     submitBtn: /Let's discuss/,
//     noOfPages: 2
//   },
  {
    url: "/ai/services",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/appliance/hardware",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 4,
  },
  {
    url: "/automotive",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company/, "test"],
      [/Email address/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/aws",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/azure",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/ceph",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/containers",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/core",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company:/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/core/smartstart",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company:/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/dell",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/desktop/organisations",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/internet-of-things/digital-signage",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company:/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/download/iot",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/financial-services",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/gcp",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/gov",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Work phone:/, "07777777777"],
    ],
    submitBtn: /Let's talk/,
    noOfPages: 3
  },
  {
    url: "/ibm",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/internet-of-things/appstore",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company:/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/internet-of-things/gateways",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company:/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/internet-of-things/networking",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company:/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/kubernetes",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 1
  },
  {
    url: "/kubernetes/managed",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 1
  },
  {
    url: "/managed",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/managed/apps",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/observability",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/openstack",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/openstack/managed",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 1
  },
  {
    url: "/openstack/pricing-calculator",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company name/, "test"],
      [/Job title/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 1
  },
  {
    url: "/pricing/consulting",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/pricing/devices",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/pricing/infra",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/robotics",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company/, "test"],
      [/Job title/, "test"],
      [/Email address:/, "test@gmail.com"],
      [/Phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/security",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/security/docker-images",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/security/esm",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 2
  },
  {
    url: "/server",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/telco",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/telco/osm",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
  {
    url: "/wsl",
    inputs: [
      [/First name/, "test"],
      [/Last name/, "test"],
      [/Company name/, "test"],
      [/Work email/, "test@gmail.com"],
      [/Mobile\/cell phone number:/, "07777777777"],
    ],
    submitBtn: /Let's discuss/,
    noOfPages: 3
  },
];
