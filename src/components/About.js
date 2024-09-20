import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <div>
        <h1> About </h1>
      </div>
      <div>
        <h2> </h2>
        <h3 className="about">
          This is a Pandugo application which gives information about restaurant
        </h3>
        <UserClass
          name={"Doctor Babu Chiripireddy"}
          location={"Johns creek, Atlanta"}
        />
      </div>
    </div>
  );
};

export default About;
