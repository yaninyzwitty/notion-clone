import {create} from "zustand"

type Props = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onReplace: (url: string) => void;
    url?: string
}

export const useCoverImage = create<Props>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true, url: undefined }),
    onClose: () => set({isOpen: false, url: undefined }),
    onReplace: (url:string) => set({ isOpen: true, url})


}));
