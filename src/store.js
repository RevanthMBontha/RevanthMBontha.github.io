import { create } from "zustand";

const useGlobalStore = create((set) => ({
  edges: [
    {
      id: "e_fullResume_output",
      source: "fullResume",
      target: "output",
      type: "dashEdge",
      animated: true,
      showHint: true,
    },
  ], // Tracks React Flow edges

  addEdges: (newEdges) =>
    set((store) => ({ edges: [...store.edges, { ...newEdges }] })),
  setEdges: (newEdges) => set({ edges: newEdges }),

  connectedInputIds: ["fullResume"], // Tracks IDs of all input nodes connected to the output node
  checkConnections: (outputNodeId) =>
    set((state) => {
      const connectedEdges = state.edges.filter(
        (edge) => edge.target === outputNodeId
      );
      const connectedInputIds = connectedEdges.map((edge) => edge.source);
      return { connectedInputIds };
    }),
}));

export default useGlobalStore;
