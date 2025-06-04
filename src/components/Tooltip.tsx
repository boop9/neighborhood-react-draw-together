interface Props {
  text?: string;
  children?: React.ReactNode;
}

const Tooltip = ({ text, children }: Props) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip" data-toggle="tooltip">
        {children};{text};
      </div>
    </div>
  );
};

export default Tooltip;
