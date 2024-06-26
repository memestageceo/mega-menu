export function createNavState() {
	/**tracks hovering and hovering index */
	let hovering = $state<number | null>(null);

	/**tracks popover height */
	let popoverHeight = $state<number>(0);

	/**tracks popover left */
	let popoverLeft = $state<number>(0);

	/**tracks all the nav items */
	let refs = $state<HTMLElement[]>([]);

	return {
		get hovering() {
			return hovering;
		},
		get popoverHeight() {
			return popoverHeight;
		},
		get popoverLeft() {
			return popoverLeft;
		},
		get refs() {
			return refs;
		},
		set hovering(val) {
			hovering = val;
		},
		set popoverHeight(val) {
			popoverHeight = val;
		},
		set popoverLeft(val) {
			popoverLeft = val;
		},
		set refs(val) {
			refs = val;
		}
	};
}

export const navState = createNavState();
