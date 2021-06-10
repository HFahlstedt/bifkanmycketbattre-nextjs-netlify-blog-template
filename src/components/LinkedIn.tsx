export interface LinkedInProps {
  link: string;
}

export const LinkedIn: React.FC<LinkedInProps> = ({ link }) => (
  <p className="is-size-7">
    <a className="has-text-white" href={link} target="_blank">
      LinkedIn
    </a>
  </p>
);
