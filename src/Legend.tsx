interface LegendProps {
  data: { value: string; description: string }[];
  title: string;
}

export const Legend = ({ data, title }: LegendProps) => (
  <div className="legend">
    <div className="legend__content">
      <div className="legend__header">
        <h3>{title}</h3>
      </div>
      <dl className="legend__list">
        {data.map((item) => (
          <div
            key={item.value}
            className={`legend__item legend__item--${item.value
              .toLocaleLowerCase()
              .replace(/\s+/, '')}`}
          >
            <dt>{item.value}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);
