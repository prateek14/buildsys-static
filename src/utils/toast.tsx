import { toast, ToastOptions } from 'react-toastify';

export class ToastUtils {
    private static opts: ToastOptions = {
        position: 'bottom-center',
        draggable: false,
    };

    public static success(text: string): void {
        toast.success(text, ToastUtils.opts);
    }

    public static error(text: string): void {
        toast.error(text, ToastUtils.opts);
    }

    public static warning(text: string): void {
        toast.warning(text, ToastUtils.opts);
    }

    public static info(text: string): void {
        toast.info(text, ToastUtils.opts);
    }
}
