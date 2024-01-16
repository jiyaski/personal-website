



const allowedOrigins = [
    'https://jmhopkins.vercel.app',
    'https://personal-website-client-git-main-jiyaskis-projects.vercel.app'
];

// matches all my deployment link URLs 
const vercelDeploymentRegex = /^https:\/\/personal-website-client-\S+-jiyaskis-projects\.vercel\.app$/;

const origin = "https://personal-website-client-104i9lplp-jiyaskis-projects.vercel.app";
if (vercelDeploymentRegex.test(origin)) {
    console.log("CORS allowed"); 
} else {
    console.log("CORS denied"); 
}

