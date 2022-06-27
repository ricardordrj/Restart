import React, { useState, useEffect } from "react";
import { BaseLayout } from "../../Components";
import axios from "axios";

const About = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ricardordrj")
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BaseLayout>
      {userInfo ? (
        <section>
          <img src={userInfo.avatar_url} alt="user image" />
          <h4>{userInfo.name}</h4>
          <span>login: {userInfo.login}</span>
        </section>
      ) : (
        <span>Failed to fetch</span>
      )}
    </BaseLayout>
  );
};

export default About;
