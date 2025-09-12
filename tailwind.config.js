const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pdn-gradiente': 'linear-gradient(230deg, rgb(28, 124, 191) 0%, rgb(28, 124, 191) 4%, rgb(159, 88, 226) 49%, rgb(109, 64, 97) 100%)',
        's1-gradiente': 'linear-gradient(0deg, rgb(236, 149, 136) 43%, rgb(236, 202, 197) 100%)',
        's2-gradiente': 'linear-gradient(0deg, rgb(179, 97, 173) 43%, rgb(209, 148, 205) 100%)',
        's3-gradiente': 'linear-gradient(0deg, rgb(145, 134, 218) 43%, rgb(172, 162, 236) 100%)',
        's4-gradiente': 'linear-gradient(0deg, rgb(134, 187, 104) 43%, rgb(175, 227, 145) 100%)',
        's5-gradiente': 'linear-gradient(0deg, rgb(52, 203, 180) 43%, rgb(90, 231, 210) 100%)',
        's6-gradiente': 'linear-gradient(0deg, rgb(66, 165, 205) 43%, rgb(96, 199, 240) 100%)',
        's-gradiente-deshabilitado': 'linear-gradient(0deg, rgb(180, 180, 180) 43%, rgb(220, 220, 220) 100%)'
      },
      boxShadow: {
        'cardSystems': '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)',
      }
    },
  },
  plugins: [],
});
