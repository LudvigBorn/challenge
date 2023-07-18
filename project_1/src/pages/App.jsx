import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { UiBlog } from "../uikit/ui-blog";

export default function MainPage() {
  return (
    <div className="bg-slate-50 min-h-screen ">
      <Header></Header>
      <Banner />
      <div className="container">
        <UiBlog type="horizontally" className="mt-8" />
        <div className="flex gap-8 justify-between mt-10">
          <UiBlog />
          <UiBlog />
          <UiBlog />
        </div>
        <UiBlog type="banner" className="mt-10" />
      </div>
    </div>
  );
}
