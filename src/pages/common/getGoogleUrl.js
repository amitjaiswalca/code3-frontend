export const getGoogleUrl = (from) => {
    const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
  
    const options = {
      redirect_uri: "http://localhost:3000",
      client_id:"922003399486-vepjbjeq9v4dricp2nr9tbetsqkhj20r.apps.googleusercontent.com" ,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
      state: from,
    };
    console.log(options)
    const qs = new URLSearchParams(options);
    console.log(qs)
    return `${rootUrl}?${qs.toString()}`;
  };