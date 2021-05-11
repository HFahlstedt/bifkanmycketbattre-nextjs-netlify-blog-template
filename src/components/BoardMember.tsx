export interface BoardMemberProps {
  name: string;
  title: string;
}

export default function BoardMember({ name, title }: BoardMemberProps) {
  return (
    <div className="block">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="/images/img.png" alt="Placeholder image" />
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
            <a href="/interview">Läs mer</a>
          </div>
        </div>
      </div>
    </div>
  );
}
