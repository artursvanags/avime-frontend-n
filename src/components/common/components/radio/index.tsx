import clsx from "clsx";

const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <div
      className={clsx(
        "flex h-3 w-3 items-center justify-center rounded-full border border-primary-foreground",
        {
          "bg-primary": checked,
        },
      )}
    >
      {checked && <div className="h-2 w-2 rounded-full bg-primary" />}
    </div>
  );
};

export default Radio;
