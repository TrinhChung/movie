import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

// Giả lập dữ liệu phim
const movies = [
  {
    id: 1,
    title: "Movie Title 1",
    quality: "1080p",
    duration: "120 min",
    views: "1M views",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    title: "Movie Title 2",
    quality: "720p",
    duration: "90 min",
    views: "500K views",
    image: "/path/to/image2.jpg",
  },
  // Thêm nhiều phim ở đây
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Discover&nbsp;</span>
        <span className={title({ color: "violet" })}>your favorite&nbsp;</span>
        <br />
        <span className={title()}>movies and series with us.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Your go-to platform for watching movies online.
        </div>
      </div>

      <div className="slider-container overflow-x-auto">
        <div className="flex gap-4 p-4">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card border rounded-lg shadow-lg">
              <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-2">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p>{movie.quality}</p>
                <p>{movie.duration}</p>
                <p>{movie.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Browse Movies
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Start watching by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
