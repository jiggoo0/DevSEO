import { fetchVercelProjects } from "../services/vercelService.js";
export const getVercelInfo = async (_req, res) => {
    try {
        const data = await fetchVercelProjects();
        return res.json({ vercel: data });
    }
    catch (err) {
        return res.status(500).json({ message: "Failed to fetch from Vercel", error: err.message });
    }
};
