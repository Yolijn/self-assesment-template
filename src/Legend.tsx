interface LegendProps {
  data: { value: string; description: string }[];
  title: string;
  closeLegend: () => void;
}

export const Legend = ({ data, title, closeLegend }: LegendProps) => (
  <div className="legend">
    <div className="legend__content">
      <div className="legend__header">
        <h3>{title}</h3>
        <button onClick={closeLegend} className="button button--icon">
          ╳
        </button>
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
