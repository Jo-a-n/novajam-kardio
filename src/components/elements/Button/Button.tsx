import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonType } from '@/helpers/types';
import { IoIosArrowRoundForward } from 'react-icons/io';

interface ButtonProps {
  data: ButtonType;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'base' | 'lg';
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  data,
  className,
  children,
  onClick,
  size = 'lg',
  type,
  disabled,
  fullWidth,
}) => {
  const {
    label,
    href,
    variant = 'primary',
    withArrow = false,
    openNewTab = false,
    icon,
  } = data;

  const renderIcon = () =>
    icon && (
      <Image
        className={classNames('object-contain inline-block opacity-80', {
          'w-5 h-5 ml-2': size === 'sm' || size === 'base',
          'w-7 h-7 m-2.5': size === 'lg',
          'group-hover/btn:brightness-100 group-hover/btn:invert transition-all duration-500 ease':
            variant === 'outline-white',
        })}
        src={icon.url}
        alt={icon.title}
        width={icon.width}
        height={icon.height}
      />
    );

  const renderArrow = () =>
    withArrow && (
      <IoIosArrowRoundForward
        className={classNames(
          'block ml-4 relative left-1 group-hover/btn:left-2 transition-all duration-300 ease',
          {
            'text-primary-600 group-hover/btn:text-neutral-100':
              variant === 'outline',
            'text-inherit group-hover/btn:text-neutral-100':
              variant === 'outline-black',
            'text-neutral-100 group-hover/btn:text-inherit':
              variant === 'outline-white',
          },
        )}
        size={size === 'lg' ? 30 : 20}
      />
    );

  const renderButtonContent = () => {
    if (variant === 'ghost') {
      return (
        <>
          <div className="flex flex-col items-center gap-2 text-left">
            <span className="line-clamp-2">{children || label}</span>
            {renderIcon()}
          </div>
          {renderArrow()}
        </>
      );
    }
    return (
      <>
        {renderIcon()}
        {children || label}
        {renderArrow()}
      </>
    );
  };

  const getVariantClasses = () => {
    if (variant === 'ghost') {
      return classNames(
        'w-full py-1.5 border-b-3 border-dotted border-red-500/0 flex relative left-0 font-normal text-base hover:left-1 hover:text-red-800 hover:border-b-3 hover:border-red-500/50 transition-all duration-500 ease drop-shadow-xl text-neutral-700 dark:text-neutral-50/90',
        {
          'text-sm': size === 'sm',
          'text-base': size === 'base',
          'xl:text-lg px-2': size === 'lg',
          'opacity-20 pointer-events-none cursor-not-allowed': disabled,
        },
        className,
      );
    }

    return classNames(
      'w-full min-h-[60px] whitespace-nowrap relative border rounded-theme-button transition-all duration-500 ease',
      {
        'border-primary-600 bg-primary-600 hover:brightness-110 text-neutral-100':
          variant === 'primary',
        'border-secondary-600 bg-secondary-600 hover:brightness-110 text-neutral-100':
          variant === 'secondary',
        'border-neutral-950 bg-neutral-950 text-neutral-100 hover:bg-neutral-900 hover:border-neutral-900 dark:border-neutral-700':
          variant === 'black',
        'text-neutral-800 border-neutral-50 bg-neutral-50 hover:bg-white hover:border-white text-inherit':
          variant === 'white',
        'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-neutral-100':
          variant === 'outline',
        'border-neutral-900 text-inherit hover:bg-neutral-950 hover:text-neutral-100 dark:border-neutral-100':
          variant === 'outline-black',
        'border-white text-neutral-100 hover:bg-white hover:text-inherit drop-shadow-lg':
          variant === 'outline-white',
        'px-2 py-2 min-w-[100px] lg:min-w-[120px] text-sm font-medium':
          size === 'sm',
        'px-4 py-2 min-w-[100px] lg:min-w-[120px] text-base font-medium':
          size === 'base',
        'px-6 py-3.5 min-w-[130px] lg:min-w-[160px] xl:text-lg font-medium':
          size === 'lg',
        'opacity-20 pointer-events-none cursor-not-allowed': disabled,
      },
      className,
    );
  };

  const buttonClasses = classNames({ 'w-full': fullWidth });

  const renderLinkOrSpan = () => {
    const content = (
      <span
        className={classNames(
          'group/btn flex justify-center items-center text-center',
          getVariantClasses(),
        )}
      >
        {renderButtonContent()}
      </span>
    );

    if (href) {
      return (
        <Link
          className={classNames(
            'group/btn flex justify-center items-center text-center',
            getVariantClasses(),
          )}
          href={href}
          target={openNewTab ? '_blank' : '_self'}
          scroll
        >
          {renderButtonContent()}
        </Link>
      );
    }

    return content;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={buttonClasses}
    >
      {renderLinkOrSpan()}
    </button>
  );
};
