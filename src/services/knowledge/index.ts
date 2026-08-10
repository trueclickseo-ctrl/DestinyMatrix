export interface KnowledgeNode {
  id: string;
  type: 'calculator' | 'guide' | 'entity' | 'pillar';
  title: string;
  slug: string;
  pillar: string;
}

export interface KnowledgeEdge {
  sourceId: string;
  targetId: string;
  relation: 'calculates' | 'explains' | 'relates_to' | 'parent_of';
}

export class KnowledgeGraphService {
  private nodes: Map<string, KnowledgeNode> = new Map();
  private edges: KnowledgeEdge[] = [];

  constructor() {
    // Minimal graph seed for Phase 1
    this.addNode({
      id: 'calc-life-path',
      type: 'calculator',
      title: 'Life Path Number Calculator',
      slug: 'life-path-number',
      pillar: 'numerology',
    });
    this.addNode({
      id: 'guide-life-path-1',
      type: 'guide',
      title: 'Life Path 1: The Leader',
      slug: 'life-path-1-meaning',
      pillar: 'numerology',
    });
    this.addNode({
      id: 'entity-numerology',
      type: 'pillar',
      title: 'Numerology',
      slug: 'numerology',
      pillar: 'numerology',
    });

    this.addEdge({ sourceId: 'calc-life-path', targetId: 'guide-life-path-1', relation: 'explains' });
    this.addEdge({ sourceId: 'calc-life-path', targetId: 'entity-numerology', relation: 'relates_to' });
  }

  addNode(node: KnowledgeNode) {
    this.nodes.set(node.id, node);
  }

  addEdge(edge: KnowledgeEdge) {
    this.edges.push(edge);
  }

  getRelatedNodes(nodeId: string): KnowledgeNode[] {
    const targetIds = this.edges
      .filter((e) => e.sourceId === nodeId)
      .map((e) => e.targetId);
    return targetIds.map((id) => this.nodes.get(id)!).filter(Boolean);
  }
}
