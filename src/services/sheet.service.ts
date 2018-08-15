import { AbilityScore } from "@/domain";

const defaultDescriptions = [
  {
    name: 'abilityScores',
    url: 'ability-scores'
  }, {
    name: 'savingThrows',
    url: 'saving-throws'
  }, {
    name: 'miscelaneous',
    url: 'miscelaneous'
  }
];

export class SheetService {
  private baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string } = { baseUrl: process.env.VUE_APP_BASE_URL as string }) {
    this.baseUrl = baseUrl;
  }

  async getDescriptions(sections: { name: string, url: string }[] = defaultDescriptions) {
    const results = await Promise.all(sections.map(section => {
      return fetch(this.baseUrl + section.url).then(response => response.json());
    }));
    const descriptions: { [key: string]: any; } = {};
    sections.forEach((section, index) => {
      descriptions[section.name] = results[index];
    })
    return descriptions;
  }

  async updateDescription(url: string, body: any) {
    return fetch(`${this.baseUrl}${url}/${body._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body)
    });
  }
}

export default new SheetService();