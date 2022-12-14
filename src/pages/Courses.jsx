import { Header } from "../components/header";
import { Courses } from "../components/Courses/courses";
import { ReviewSider } from "../components/Courses/reviewSlider";
import { Certificate } from "../components/Home/certificate";
import { Subscribe } from "../components/Home/subscribe";

export default function CoursesPage() {
  return (
    <>
      <Header />
      <Courses />
      <ReviewSider />
      <Certificate/>
      <Subscribe/>
    </>
  );
}
