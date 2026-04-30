import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Dropdown.module.css";
import Close from "../../../assets/Icons/eraseForm.svg?react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
  options: string[];
  placeholder: string;
  id: string;
  label: string;
  labelClass?: string;
};

function Dropdown({
  value,
  onChange,
  onSelect,
  options,
  placeholder,
  id,
  label,
  labelClass,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(value.toLowerCase()),
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length > 150 || (val.length > 0 && val.trim() === "")) return;
      onChange(val);
      setIsOpen(true);
    },
    [onChange],
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.field} ref={containerRef}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          value={value}
          placeholder={placeholder}
          className={styles.input}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
          >
            <Close />
          </button>
        )}
      </div>
      {isOpen && filtered.length > 0 && (
        <ul className={styles.dropdown}>
          {filtered.map((option) => (
            <li
              role="option"
              aria-selected={false}
              key={option}
              className={styles.dropdownItem}
              onMouseDown={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
