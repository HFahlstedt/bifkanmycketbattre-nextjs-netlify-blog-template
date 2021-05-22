export interface BoardMemberProps {
  name: string;
  title: string;
  image?: string;
  moreInfo?: string;
}

export default function BoardMember({
  name,
  title,
  image = "/images/unavailable.png",
  moreInfo = "/interview",
}: BoardMemberProps) {
  return (
    <div className="block">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={`[${name}]`} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{title}</p>
            </div>
          </div>

          <div className="content"></div>
          <div className="content">
            <a href={moreInfo}>Läs mer</a>
          </div>
        </div>
      </div>
    </div>
  );
}
